import * as _170 from "./api/http";
import * as _171 from "./protobuf/descriptor";
import * as _172 from "./protobuf/any";
import * as _173 from "./protobuf/timestamp";
import * as _174 from "./protobuf/duration";
export declare namespace google {
    const api: {
        Http: {
            typeUrl: string;
            encode(message: _170.Http, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _170.Http;
            fromPartial(object: Partial<_170.Http>): _170.Http;
            fromAmino(object: _170.HttpAmino): _170.Http;
            toAmino(message: _170.Http): _170.HttpAmino;
            fromAminoMsg(object: _170.HttpAminoMsg): _170.Http;
            fromProtoMsg(message: _170.HttpProtoMsg): _170.Http;
            toProto(message: _170.Http): Uint8Array;
            toProtoMsg(message: _170.Http): _170.HttpProtoMsg;
        };
        HttpRule: {
            typeUrl: string;
            encode(message: _170.HttpRule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _170.HttpRule;
            fromPartial(object: Partial<_170.HttpRule>): _170.HttpRule;
            fromAmino(object: _170.HttpRuleAmino): _170.HttpRule;
            toAmino(message: _170.HttpRule): _170.HttpRuleAmino;
            fromAminoMsg(object: _170.HttpRuleAminoMsg): _170.HttpRule;
            fromProtoMsg(message: _170.HttpRuleProtoMsg): _170.HttpRule;
            toProto(message: _170.HttpRule): Uint8Array;
            toProtoMsg(message: _170.HttpRule): _170.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            typeUrl: string;
            encode(message: _170.CustomHttpPattern, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _170.CustomHttpPattern;
            fromPartial(object: Partial<_170.CustomHttpPattern>): _170.CustomHttpPattern;
            fromAmino(object: _170.CustomHttpPatternAmino): _170.CustomHttpPattern;
            toAmino(message: _170.CustomHttpPattern): _170.CustomHttpPatternAmino;
            fromAminoMsg(object: _170.CustomHttpPatternAminoMsg): _170.CustomHttpPattern;
            fromProtoMsg(message: _170.CustomHttpPatternProtoMsg): _170.CustomHttpPattern;
            toProto(message: _170.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _170.CustomHttpPattern): _170.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        Duration: {
            typeUrl: string;
            encode(message: _174.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _174.Duration;
            fromPartial(object: Partial<_174.Duration>): _174.Duration;
            fromAmino(object: string): _174.Duration;
            toAmino(message: _174.Duration): string;
            fromAminoMsg(object: _174.DurationAminoMsg): _174.Duration;
            fromProtoMsg(message: _174.DurationProtoMsg): _174.Duration;
            toProto(message: _174.Duration): Uint8Array;
            toProtoMsg(message: _174.Duration): _174.DurationProtoMsg;
        };
        Timestamp: {
            typeUrl: string;
            encode(message: _173.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _173.Timestamp;
            fromPartial(object: Partial<_173.Timestamp>): _173.Timestamp;
            fromAmino(object: string): _173.Timestamp;
            toAmino(message: _173.Timestamp): string;
            fromAminoMsg(object: _173.TimestampAminoMsg): _173.Timestamp;
            fromProtoMsg(message: _173.TimestampProtoMsg): _173.Timestamp;
            toProto(message: _173.Timestamp): Uint8Array;
            toProtoMsg(message: _173.Timestamp): _173.TimestampProtoMsg;
        };
        Any: {
            typeUrl: string;
            encode(message: _172.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _172.Any;
            fromPartial(object: Partial<_172.Any>): _172.Any;
            fromAmino(object: _172.AnyAmino): _172.Any;
            toAmino(message: _172.Any): _172.AnyAmino;
            fromAminoMsg(object: _172.AnyAminoMsg): _172.Any;
            fromProtoMsg(message: _172.AnyProtoMsg): _172.Any;
            toProto(message: _172.Any): Uint8Array;
            toProtoMsg(message: _172.Any): _172.AnyProtoMsg;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _171.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _171.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _171.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _171.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _171.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _171.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _171.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _171.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _171.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _171.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _171.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _171.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _171.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _171.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _171.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _171.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _171.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _171.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _171.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _171.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _171.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _171.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _171.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _171.FieldOptions_CType;
        FieldOptions_JSType: typeof _171.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _171.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _171.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _171.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _171.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _171.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            typeUrl: string;
            encode(message: _171.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.FileDescriptorSet;
            fromPartial(object: Partial<_171.FileDescriptorSet>): _171.FileDescriptorSet;
            fromAmino(object: _171.FileDescriptorSetAmino): _171.FileDescriptorSet;
            toAmino(message: _171.FileDescriptorSet): _171.FileDescriptorSetAmino;
            fromAminoMsg(object: _171.FileDescriptorSetAminoMsg): _171.FileDescriptorSet;
            fromProtoMsg(message: _171.FileDescriptorSetProtoMsg): _171.FileDescriptorSet;
            toProto(message: _171.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _171.FileDescriptorSet): _171.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            typeUrl: string;
            encode(message: _171.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.FileDescriptorProto;
            fromPartial(object: Partial<_171.FileDescriptorProto>): _171.FileDescriptorProto;
            fromAmino(object: _171.FileDescriptorProtoAmino): _171.FileDescriptorProto;
            toAmino(message: _171.FileDescriptorProto): _171.FileDescriptorProtoAmino;
            fromAminoMsg(object: _171.FileDescriptorProtoAminoMsg): _171.FileDescriptorProto;
            fromProtoMsg(message: _171.FileDescriptorProtoProtoMsg): _171.FileDescriptorProto;
            toProto(message: _171.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _171.FileDescriptorProto): _171.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            typeUrl: string;
            encode(message: _171.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.DescriptorProto;
            fromPartial(object: Partial<_171.DescriptorProto>): _171.DescriptorProto;
            fromAmino(object: _171.DescriptorProtoAmino): _171.DescriptorProto;
            toAmino(message: _171.DescriptorProto): _171.DescriptorProtoAmino;
            fromAminoMsg(object: _171.DescriptorProtoAminoMsg): _171.DescriptorProto;
            fromProtoMsg(message: _171.DescriptorProtoProtoMsg): _171.DescriptorProto;
            toProto(message: _171.DescriptorProto): Uint8Array;
            toProtoMsg(message: _171.DescriptorProto): _171.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            typeUrl: string;
            encode(message: _171.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_171.DescriptorProto_ExtensionRange>): _171.DescriptorProto_ExtensionRange;
            fromAmino(object: _171.DescriptorProto_ExtensionRangeAmino): _171.DescriptorProto_ExtensionRange;
            toAmino(message: _171.DescriptorProto_ExtensionRange): _171.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _171.DescriptorProto_ExtensionRangeAminoMsg): _171.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _171.DescriptorProto_ExtensionRangeProtoMsg): _171.DescriptorProto_ExtensionRange;
            toProto(message: _171.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _171.DescriptorProto_ExtensionRange): _171.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            typeUrl: string;
            encode(message: _171.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_171.DescriptorProto_ReservedRange>): _171.DescriptorProto_ReservedRange;
            fromAmino(object: _171.DescriptorProto_ReservedRangeAmino): _171.DescriptorProto_ReservedRange;
            toAmino(message: _171.DescriptorProto_ReservedRange): _171.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _171.DescriptorProto_ReservedRangeAminoMsg): _171.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _171.DescriptorProto_ReservedRangeProtoMsg): _171.DescriptorProto_ReservedRange;
            toProto(message: _171.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _171.DescriptorProto_ReservedRange): _171.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            typeUrl: string;
            encode(message: _171.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.ExtensionRangeOptions;
            fromPartial(object: Partial<_171.ExtensionRangeOptions>): _171.ExtensionRangeOptions;
            fromAmino(object: _171.ExtensionRangeOptionsAmino): _171.ExtensionRangeOptions;
            toAmino(message: _171.ExtensionRangeOptions): _171.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _171.ExtensionRangeOptionsAminoMsg): _171.ExtensionRangeOptions;
            fromProtoMsg(message: _171.ExtensionRangeOptionsProtoMsg): _171.ExtensionRangeOptions;
            toProto(message: _171.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _171.ExtensionRangeOptions): _171.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            typeUrl: string;
            encode(message: _171.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.FieldDescriptorProto;
            fromPartial(object: Partial<_171.FieldDescriptorProto>): _171.FieldDescriptorProto;
            fromAmino(object: _171.FieldDescriptorProtoAmino): _171.FieldDescriptorProto;
            toAmino(message: _171.FieldDescriptorProto): _171.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _171.FieldDescriptorProtoAminoMsg): _171.FieldDescriptorProto;
            fromProtoMsg(message: _171.FieldDescriptorProtoProtoMsg): _171.FieldDescriptorProto;
            toProto(message: _171.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _171.FieldDescriptorProto): _171.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            typeUrl: string;
            encode(message: _171.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.OneofDescriptorProto;
            fromPartial(object: Partial<_171.OneofDescriptorProto>): _171.OneofDescriptorProto;
            fromAmino(object: _171.OneofDescriptorProtoAmino): _171.OneofDescriptorProto;
            toAmino(message: _171.OneofDescriptorProto): _171.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _171.OneofDescriptorProtoAminoMsg): _171.OneofDescriptorProto;
            fromProtoMsg(message: _171.OneofDescriptorProtoProtoMsg): _171.OneofDescriptorProto;
            toProto(message: _171.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _171.OneofDescriptorProto): _171.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            typeUrl: string;
            encode(message: _171.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.EnumDescriptorProto;
            fromPartial(object: Partial<_171.EnumDescriptorProto>): _171.EnumDescriptorProto;
            fromAmino(object: _171.EnumDescriptorProtoAmino): _171.EnumDescriptorProto;
            toAmino(message: _171.EnumDescriptorProto): _171.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _171.EnumDescriptorProtoAminoMsg): _171.EnumDescriptorProto;
            fromProtoMsg(message: _171.EnumDescriptorProtoProtoMsg): _171.EnumDescriptorProto;
            toProto(message: _171.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _171.EnumDescriptorProto): _171.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            typeUrl: string;
            encode(message: _171.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_171.EnumDescriptorProto_EnumReservedRange>): _171.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _171.EnumDescriptorProto_EnumReservedRangeAmino): _171.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _171.EnumDescriptorProto_EnumReservedRange): _171.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _171.EnumDescriptorProto_EnumReservedRangeAminoMsg): _171.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _171.EnumDescriptorProto_EnumReservedRangeProtoMsg): _171.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _171.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _171.EnumDescriptorProto_EnumReservedRange): _171.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            typeUrl: string;
            encode(message: _171.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.EnumValueDescriptorProto;
            fromPartial(object: Partial<_171.EnumValueDescriptorProto>): _171.EnumValueDescriptorProto;
            fromAmino(object: _171.EnumValueDescriptorProtoAmino): _171.EnumValueDescriptorProto;
            toAmino(message: _171.EnumValueDescriptorProto): _171.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _171.EnumValueDescriptorProtoAminoMsg): _171.EnumValueDescriptorProto;
            fromProtoMsg(message: _171.EnumValueDescriptorProtoProtoMsg): _171.EnumValueDescriptorProto;
            toProto(message: _171.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _171.EnumValueDescriptorProto): _171.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            typeUrl: string;
            encode(message: _171.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.ServiceDescriptorProto;
            fromPartial(object: Partial<_171.ServiceDescriptorProto>): _171.ServiceDescriptorProto;
            fromAmino(object: _171.ServiceDescriptorProtoAmino): _171.ServiceDescriptorProto;
            toAmino(message: _171.ServiceDescriptorProto): _171.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _171.ServiceDescriptorProtoAminoMsg): _171.ServiceDescriptorProto;
            fromProtoMsg(message: _171.ServiceDescriptorProtoProtoMsg): _171.ServiceDescriptorProto;
            toProto(message: _171.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _171.ServiceDescriptorProto): _171.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            typeUrl: string;
            encode(message: _171.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.MethodDescriptorProto;
            fromPartial(object: Partial<_171.MethodDescriptorProto>): _171.MethodDescriptorProto;
            fromAmino(object: _171.MethodDescriptorProtoAmino): _171.MethodDescriptorProto;
            toAmino(message: _171.MethodDescriptorProto): _171.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _171.MethodDescriptorProtoAminoMsg): _171.MethodDescriptorProto;
            fromProtoMsg(message: _171.MethodDescriptorProtoProtoMsg): _171.MethodDescriptorProto;
            toProto(message: _171.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _171.MethodDescriptorProto): _171.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            typeUrl: string;
            encode(message: _171.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.FileOptions;
            fromPartial(object: Partial<_171.FileOptions>): _171.FileOptions;
            fromAmino(object: _171.FileOptionsAmino): _171.FileOptions;
            toAmino(message: _171.FileOptions): _171.FileOptionsAmino;
            fromAminoMsg(object: _171.FileOptionsAminoMsg): _171.FileOptions;
            fromProtoMsg(message: _171.FileOptionsProtoMsg): _171.FileOptions;
            toProto(message: _171.FileOptions): Uint8Array;
            toProtoMsg(message: _171.FileOptions): _171.FileOptionsProtoMsg;
        };
        MessageOptions: {
            typeUrl: string;
            encode(message: _171.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.MessageOptions;
            fromPartial(object: Partial<_171.MessageOptions>): _171.MessageOptions;
            fromAmino(object: _171.MessageOptionsAmino): _171.MessageOptions;
            toAmino(message: _171.MessageOptions): _171.MessageOptionsAmino;
            fromAminoMsg(object: _171.MessageOptionsAminoMsg): _171.MessageOptions;
            fromProtoMsg(message: _171.MessageOptionsProtoMsg): _171.MessageOptions;
            toProto(message: _171.MessageOptions): Uint8Array;
            toProtoMsg(message: _171.MessageOptions): _171.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            typeUrl: string;
            encode(message: _171.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.FieldOptions;
            fromPartial(object: Partial<_171.FieldOptions>): _171.FieldOptions;
            fromAmino(object: _171.FieldOptionsAmino): _171.FieldOptions;
            toAmino(message: _171.FieldOptions): _171.FieldOptionsAmino;
            fromAminoMsg(object: _171.FieldOptionsAminoMsg): _171.FieldOptions;
            fromProtoMsg(message: _171.FieldOptionsProtoMsg): _171.FieldOptions;
            toProto(message: _171.FieldOptions): Uint8Array;
            toProtoMsg(message: _171.FieldOptions): _171.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            typeUrl: string;
            encode(message: _171.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.OneofOptions;
            fromPartial(object: Partial<_171.OneofOptions>): _171.OneofOptions;
            fromAmino(object: _171.OneofOptionsAmino): _171.OneofOptions;
            toAmino(message: _171.OneofOptions): _171.OneofOptionsAmino;
            fromAminoMsg(object: _171.OneofOptionsAminoMsg): _171.OneofOptions;
            fromProtoMsg(message: _171.OneofOptionsProtoMsg): _171.OneofOptions;
            toProto(message: _171.OneofOptions): Uint8Array;
            toProtoMsg(message: _171.OneofOptions): _171.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            typeUrl: string;
            encode(message: _171.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.EnumOptions;
            fromPartial(object: Partial<_171.EnumOptions>): _171.EnumOptions;
            fromAmino(object: _171.EnumOptionsAmino): _171.EnumOptions;
            toAmino(message: _171.EnumOptions): _171.EnumOptionsAmino;
            fromAminoMsg(object: _171.EnumOptionsAminoMsg): _171.EnumOptions;
            fromProtoMsg(message: _171.EnumOptionsProtoMsg): _171.EnumOptions;
            toProto(message: _171.EnumOptions): Uint8Array;
            toProtoMsg(message: _171.EnumOptions): _171.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            typeUrl: string;
            encode(message: _171.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.EnumValueOptions;
            fromPartial(object: Partial<_171.EnumValueOptions>): _171.EnumValueOptions;
            fromAmino(object: _171.EnumValueOptionsAmino): _171.EnumValueOptions;
            toAmino(message: _171.EnumValueOptions): _171.EnumValueOptionsAmino;
            fromAminoMsg(object: _171.EnumValueOptionsAminoMsg): _171.EnumValueOptions;
            fromProtoMsg(message: _171.EnumValueOptionsProtoMsg): _171.EnumValueOptions;
            toProto(message: _171.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _171.EnumValueOptions): _171.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            typeUrl: string;
            encode(message: _171.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.ServiceOptions;
            fromPartial(object: Partial<_171.ServiceOptions>): _171.ServiceOptions;
            fromAmino(object: _171.ServiceOptionsAmino): _171.ServiceOptions;
            toAmino(message: _171.ServiceOptions): _171.ServiceOptionsAmino;
            fromAminoMsg(object: _171.ServiceOptionsAminoMsg): _171.ServiceOptions;
            fromProtoMsg(message: _171.ServiceOptionsProtoMsg): _171.ServiceOptions;
            toProto(message: _171.ServiceOptions): Uint8Array;
            toProtoMsg(message: _171.ServiceOptions): _171.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            typeUrl: string;
            encode(message: _171.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.MethodOptions;
            fromPartial(object: Partial<_171.MethodOptions>): _171.MethodOptions;
            fromAmino(object: _171.MethodOptionsAmino): _171.MethodOptions;
            toAmino(message: _171.MethodOptions): _171.MethodOptionsAmino;
            fromAminoMsg(object: _171.MethodOptionsAminoMsg): _171.MethodOptions;
            fromProtoMsg(message: _171.MethodOptionsProtoMsg): _171.MethodOptions;
            toProto(message: _171.MethodOptions): Uint8Array;
            toProtoMsg(message: _171.MethodOptions): _171.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            typeUrl: string;
            encode(message: _171.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.UninterpretedOption;
            fromPartial(object: Partial<_171.UninterpretedOption>): _171.UninterpretedOption;
            fromAmino(object: _171.UninterpretedOptionAmino): _171.UninterpretedOption;
            toAmino(message: _171.UninterpretedOption): _171.UninterpretedOptionAmino;
            fromAminoMsg(object: _171.UninterpretedOptionAminoMsg): _171.UninterpretedOption;
            fromProtoMsg(message: _171.UninterpretedOptionProtoMsg): _171.UninterpretedOption;
            toProto(message: _171.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _171.UninterpretedOption): _171.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            typeUrl: string;
            encode(message: _171.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_171.UninterpretedOption_NamePart>): _171.UninterpretedOption_NamePart;
            fromAmino(object: _171.UninterpretedOption_NamePartAmino): _171.UninterpretedOption_NamePart;
            toAmino(message: _171.UninterpretedOption_NamePart): _171.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _171.UninterpretedOption_NamePartAminoMsg): _171.UninterpretedOption_NamePart;
            fromProtoMsg(message: _171.UninterpretedOption_NamePartProtoMsg): _171.UninterpretedOption_NamePart;
            toProto(message: _171.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _171.UninterpretedOption_NamePart): _171.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            typeUrl: string;
            encode(message: _171.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.SourceCodeInfo;
            fromPartial(object: Partial<_171.SourceCodeInfo>): _171.SourceCodeInfo;
            fromAmino(object: _171.SourceCodeInfoAmino): _171.SourceCodeInfo;
            toAmino(message: _171.SourceCodeInfo): _171.SourceCodeInfoAmino;
            fromAminoMsg(object: _171.SourceCodeInfoAminoMsg): _171.SourceCodeInfo;
            fromProtoMsg(message: _171.SourceCodeInfoProtoMsg): _171.SourceCodeInfo;
            toProto(message: _171.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _171.SourceCodeInfo): _171.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            typeUrl: string;
            encode(message: _171.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.SourceCodeInfo_Location;
            fromPartial(object: Partial<_171.SourceCodeInfo_Location>): _171.SourceCodeInfo_Location;
            fromAmino(object: _171.SourceCodeInfo_LocationAmino): _171.SourceCodeInfo_Location;
            toAmino(message: _171.SourceCodeInfo_Location): _171.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _171.SourceCodeInfo_LocationAminoMsg): _171.SourceCodeInfo_Location;
            fromProtoMsg(message: _171.SourceCodeInfo_LocationProtoMsg): _171.SourceCodeInfo_Location;
            toProto(message: _171.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _171.SourceCodeInfo_Location): _171.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            typeUrl: string;
            encode(message: _171.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.GeneratedCodeInfo;
            fromPartial(object: Partial<_171.GeneratedCodeInfo>): _171.GeneratedCodeInfo;
            fromAmino(object: _171.GeneratedCodeInfoAmino): _171.GeneratedCodeInfo;
            toAmino(message: _171.GeneratedCodeInfo): _171.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _171.GeneratedCodeInfoAminoMsg): _171.GeneratedCodeInfo;
            fromProtoMsg(message: _171.GeneratedCodeInfoProtoMsg): _171.GeneratedCodeInfo;
            toProto(message: _171.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _171.GeneratedCodeInfo): _171.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            typeUrl: string;
            encode(message: _171.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _171.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_171.GeneratedCodeInfo_Annotation>): _171.GeneratedCodeInfo_Annotation;
            fromAmino(object: _171.GeneratedCodeInfo_AnnotationAmino): _171.GeneratedCodeInfo_Annotation;
            toAmino(message: _171.GeneratedCodeInfo_Annotation): _171.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _171.GeneratedCodeInfo_AnnotationAminoMsg): _171.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _171.GeneratedCodeInfo_AnnotationProtoMsg): _171.GeneratedCodeInfo_Annotation;
            toProto(message: _171.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _171.GeneratedCodeInfo_Annotation): _171.GeneratedCodeInfo_AnnotationProtoMsg;
        };
    };
}
