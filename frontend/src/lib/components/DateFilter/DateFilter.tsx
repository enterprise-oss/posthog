import React, { useState } from 'react'
import { Select } from 'antd'
import moment, { Moment } from 'moment'
import { dateMapping, isDate, dateFilterToText } from 'lib/utils'
import { DateFilterRange } from 'lib/components/DateFilter/DateFilterRange'

export interface DateFilterProps {
    defaultValue: string
    showCustom?: boolean
    bordered?: boolean
    makeLabel?: (key: string) => React.ReactNode
    style?: React.CSSProperties
    onChange?: (fromDate: string, toDate: string) => void
    disabled?: boolean
    getPopupContainer?: (props: any) => HTMLElement
}

interface RawDateFilterProps extends DateFilterProps {
    dateFrom?: string | Moment
    dateTo?: string | Moment
}

export function DateFilter({
    bordered,
    defaultValue,
    showCustom,
    style,
    disabled,
    makeLabel,
    onChange,
    getPopupContainer,
    dateFrom,
    dateTo,
}: RawDateFilterProps): JSX.Element {
    const [rangeDateFrom, setRangeDateFrom] = useState(
        dateFrom && isDate.test(dateFrom as string) ? moment(dateFrom) : undefined
    )
    const [rangeDateTo, setRangeDateTo] = useState(dateTo && isDate.test(dateTo as string) ? moment(dateTo) : undefined)
    const [dateRangeOpen, setDateRangeOpen] = useState(false)
    const [open, setOpen] = useState(false)

    function onClickOutside(): void {
        setOpen(false)
        setDateRangeOpen(false)
    }

    function setDate(fromDate: string, toDate: string): void {
        onChange?.(fromDate, toDate)
    }

    function _onChange(v: string): void {
        if (v === 'Date range') {
            if (open) {
                setOpen(false)
                setDateRangeOpen(true)
            }
        } else {
            setDate(dateMapping[v][0], dateMapping[v][1])
        }
    }

    function onBlur(): void {
        if (dateRangeOpen) {
            return
        }
        onClickOutside()
    }

    function onClick(): void {
        if (dateRangeOpen) {
            return
        }
        setOpen(!open)
    }

    function dropdownOnClick(e: React.MouseEvent): void {
        e.preventDefault()
        setOpen(true)
        setDateRangeOpen(false)
        document.getElementById('daterange_selector')?.focus()
    }

    function onApplyClick(): void {
        onClickOutside()
        setDate(moment(rangeDateFrom).format('YYYY-MM-DD'), moment(rangeDateTo).format('YYYY-MM-DD'))
    }

    return (
        <Select
            data-attr="date-filter"
            bordered={bordered}
            id="daterange_selector"
            value={dateFilterToText(dateFrom, dateTo, defaultValue)}
            onChange={_onChange}
            style={{
                marginRight: 4,
                ...style,
            }}
            open={open || dateRangeOpen}
            onBlur={onBlur}
            onClick={onClick}
            listHeight={440}
            dropdownMatchSelectWidth={false}
            disabled={disabled}
            optionLabelProp={makeLabel ? 'label' : undefined}
            getPopupContainer={getPopupContainer}
            dropdownRender={(menu: React.ReactElement) => {
                if (dateRangeOpen) {
                    return (
                        <DateFilterRange
                            getPopupContainer={getPopupContainer}
                            onClick={dropdownOnClick}
                            onDateFromChange={(date) => setRangeDateFrom(date)}
                            onDateToChange={(date) => setRangeDateTo(date)}
                            onApplyClick={onApplyClick}
                            onClickOutside={onClickOutside}
                            rangeDateFrom={rangeDateFrom}
                            rangeDateTo={rangeDateTo}
                        />
                    )
                } else {
                    return menu
                }
            }}
        >
            {[
                ...Object.entries(dateMapping).map(([key]) => {
                    if (key === 'Custom' && !showCustom) {
                        return null
                    }
                    return (
                        <Select.Option key={key} value={key} label={makeLabel ? makeLabel(key) : undefined}>
                            {key}
                        </Select.Option>
                    )
                }),

                <Select.Option key={'Date range'} value={'Date range'}>
                    {'Date range'}
                </Select.Option>,
            ]}
        </Select>
    )
}
