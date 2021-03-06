# @generated by generate_proto_mypy_stubs.py.  Do not edit!
from typing import Optional as typing___Optional
from typing import Text as typing___Text

from google.protobuf.descriptor import Descriptor as google___protobuf___descriptor___Descriptor
from google.protobuf.descriptor import FileDescriptor as google___protobuf___descriptor___FileDescriptor
from google.protobuf.message import Message as google___protobuf___message___Message
from google.protobuf.timestamp_pb2 import Timestamp as google___protobuf___timestamp_pb2___Timestamp
from typing_extensions import Literal as typing_extensions___Literal

builtin___bool = bool
builtin___bytes = bytes
builtin___float = float
builtin___int = int

DESCRIPTOR: google___protobuf___descriptor___FileDescriptor = ...

class Event(google___protobuf___message___Message):
    DESCRIPTOR: google___protobuf___descriptor___Descriptor = ...
    uuid: typing___Text = ...
    event: typing___Text = ...
    properties: typing___Text = ...
    timestamp: typing___Text = ...
    team_id: builtin___int = ...
    distinct_id: typing___Text = ...
    created_at: typing___Text = ...
    elements_chain: typing___Text = ...
    @property
    def proto_created_at(self) -> google___protobuf___timestamp_pb2___Timestamp: ...
    @property
    def proto_timestamp(self) -> google___protobuf___timestamp_pb2___Timestamp: ...
    def __init__(
        self,
        *,
        uuid: typing___Optional[typing___Text] = None,
        event: typing___Optional[typing___Text] = None,
        properties: typing___Optional[typing___Text] = None,
        timestamp: typing___Optional[typing___Text] = None,
        team_id: typing___Optional[builtin___int] = None,
        distinct_id: typing___Optional[typing___Text] = None,
        created_at: typing___Optional[typing___Text] = None,
        elements_chain: typing___Optional[typing___Text] = None,
        proto_created_at: typing___Optional[google___protobuf___timestamp_pb2___Timestamp] = None,
        proto_timestamp: typing___Optional[google___protobuf___timestamp_pb2___Timestamp] = None,
    ) -> None: ...
    def HasField(
        self,
        field_name: typing_extensions___Literal[
            "proto_created_at", b"proto_created_at", "proto_timestamp", b"proto_timestamp",
        ],
    ) -> builtin___bool: ...
    def ClearField(
        self,
        field_name: typing_extensions___Literal[
            "created_at",
            b"created_at",
            "distinct_id",
            b"distinct_id",
            "elements_chain",
            b"elements_chain",
            "event",
            b"event",
            "properties",
            b"properties",
            "proto_created_at",
            b"proto_created_at",
            "proto_timestamp",
            b"proto_timestamp",
            "team_id",
            b"team_id",
            "timestamp",
            b"timestamp",
            "uuid",
            b"uuid",
        ],
    ) -> None: ...

type___Event = Event
