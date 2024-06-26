import * as _144 from "./api/http";
import * as _145 from "./api/httpbody";
import * as _146 from "./protobuf/any";
import * as _147 from "./protobuf/descriptor";
import * as _148 from "./protobuf/timestamp";
import * as _149 from "./protobuf/duration";
export declare namespace google {
    const api: {
        HttpBody: {
            typeUrl: string;
            encode(message: _145.HttpBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _145.HttpBody;
            fromPartial(object: Partial<_145.HttpBody>): _145.HttpBody;
            fromAmino(object: _145.HttpBodyAmino): _145.HttpBody;
            toAmino(message: _145.HttpBody): _145.HttpBodyAmino;
            fromAminoMsg(object: _145.HttpBodyAminoMsg): _145.HttpBody;
            fromProtoMsg(message: _145.HttpBodyProtoMsg): _145.HttpBody;
            toProto(message: _145.HttpBody): Uint8Array;
            toProtoMsg(message: _145.HttpBody): _145.HttpBodyProtoMsg;
        };
        Http: {
            typeUrl: string;
            encode(message: _144.Http, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _144.Http;
            fromPartial(object: Partial<_144.Http>): _144.Http;
            fromAmino(object: _144.HttpAmino): _144.Http;
            toAmino(message: _144.Http): _144.HttpAmino;
            fromAminoMsg(object: _144.HttpAminoMsg): _144.Http;
            fromProtoMsg(message: _144.HttpProtoMsg): _144.Http;
            toProto(message: _144.Http): Uint8Array;
            toProtoMsg(message: _144.Http): _144.HttpProtoMsg;
        };
        HttpRule: {
            typeUrl: string;
            encode(message: _144.HttpRule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _144.HttpRule;
            fromPartial(object: Partial<_144.HttpRule>): _144.HttpRule;
            fromAmino(object: _144.HttpRuleAmino): _144.HttpRule;
            toAmino(message: _144.HttpRule): _144.HttpRuleAmino;
            fromAminoMsg(object: _144.HttpRuleAminoMsg): _144.HttpRule;
            fromProtoMsg(message: _144.HttpRuleProtoMsg): _144.HttpRule;
            toProto(message: _144.HttpRule): Uint8Array;
            toProtoMsg(message: _144.HttpRule): _144.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            typeUrl: string;
            encode(message: _144.CustomHttpPattern, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _144.CustomHttpPattern;
            fromPartial(object: Partial<_144.CustomHttpPattern>): _144.CustomHttpPattern;
            fromAmino(object: _144.CustomHttpPatternAmino): _144.CustomHttpPattern;
            toAmino(message: _144.CustomHttpPattern): _144.CustomHttpPatternAmino;
            fromAminoMsg(object: _144.CustomHttpPatternAminoMsg): _144.CustomHttpPattern;
            fromProtoMsg(message: _144.CustomHttpPatternProtoMsg): _144.CustomHttpPattern;
            toProto(message: _144.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _144.CustomHttpPattern): _144.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        Duration: {
            typeUrl: string;
            encode(message: _149.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _149.Duration;
            fromPartial(object: Partial<_149.Duration>): _149.Duration;
            fromAmino(object: string): _149.Duration;
            toAmino(message: _149.Duration): string;
            fromAminoMsg(object: _149.DurationAminoMsg): _149.Duration;
            fromProtoMsg(message: _149.DurationProtoMsg): _149.Duration;
            toProto(message: _149.Duration): Uint8Array;
            toProtoMsg(message: _149.Duration): _149.DurationProtoMsg;
        };
        Timestamp: {
            typeUrl: string;
            encode(message: _148.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _148.Timestamp;
            fromPartial(object: Partial<_148.Timestamp>): _148.Timestamp;
            fromAmino(object: string): _148.Timestamp;
            toAmino(message: _148.Timestamp): string;
            fromAminoMsg(object: _148.TimestampAminoMsg): _148.Timestamp;
            fromProtoMsg(message: _148.TimestampProtoMsg): _148.Timestamp;
            toProto(message: _148.Timestamp): Uint8Array;
            toProtoMsg(message: _148.Timestamp): _148.TimestampProtoMsg;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _147.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _147.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _147.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _147.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _147.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _147.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _147.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _147.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _147.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _147.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _147.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _147.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _147.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _147.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _147.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _147.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _147.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _147.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _147.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _147.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _147.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _147.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _147.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _147.FieldOptions_CType;
        FieldOptions_JSType: typeof _147.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _147.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _147.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _147.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _147.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _147.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            typeUrl: string;
            encode(message: _147.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.FileDescriptorSet;
            fromPartial(object: Partial<_147.FileDescriptorSet>): _147.FileDescriptorSet;
            fromAmino(object: _147.FileDescriptorSetAmino): _147.FileDescriptorSet;
            toAmino(message: _147.FileDescriptorSet): _147.FileDescriptorSetAmino;
            fromAminoMsg(object: _147.FileDescriptorSetAminoMsg): _147.FileDescriptorSet;
            fromProtoMsg(message: _147.FileDescriptorSetProtoMsg): _147.FileDescriptorSet;
            toProto(message: _147.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _147.FileDescriptorSet): _147.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            typeUrl: string;
            encode(message: _147.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.FileDescriptorProto;
            fromPartial(object: Partial<_147.FileDescriptorProto>): _147.FileDescriptorProto;
            fromAmino(object: _147.FileDescriptorProtoAmino): _147.FileDescriptorProto;
            toAmino(message: _147.FileDescriptorProto): _147.FileDescriptorProtoAmino;
            fromAminoMsg(object: _147.FileDescriptorProtoAminoMsg): _147.FileDescriptorProto;
            fromProtoMsg(message: _147.FileDescriptorProtoProtoMsg): _147.FileDescriptorProto;
            toProto(message: _147.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _147.FileDescriptorProto): _147.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            typeUrl: string;
            encode(message: _147.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.DescriptorProto;
            fromPartial(object: Partial<_147.DescriptorProto>): _147.DescriptorProto;
            fromAmino(object: _147.DescriptorProtoAmino): _147.DescriptorProto;
            toAmino(message: _147.DescriptorProto): _147.DescriptorProtoAmino;
            fromAminoMsg(object: _147.DescriptorProtoAminoMsg): _147.DescriptorProto;
            fromProtoMsg(message: _147.DescriptorProtoProtoMsg): _147.DescriptorProto;
            toProto(message: _147.DescriptorProto): Uint8Array;
            toProtoMsg(message: _147.DescriptorProto): _147.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            typeUrl: string;
            encode(message: _147.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_147.DescriptorProto_ExtensionRange>): _147.DescriptorProto_ExtensionRange;
            fromAmino(object: _147.DescriptorProto_ExtensionRangeAmino): _147.DescriptorProto_ExtensionRange;
            toAmino(message: _147.DescriptorProto_ExtensionRange): _147.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _147.DescriptorProto_ExtensionRangeAminoMsg): _147.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _147.DescriptorProto_ExtensionRangeProtoMsg): _147.DescriptorProto_ExtensionRange;
            toProto(message: _147.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _147.DescriptorProto_ExtensionRange): _147.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            typeUrl: string;
            encode(message: _147.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_147.DescriptorProto_ReservedRange>): _147.DescriptorProto_ReservedRange;
            fromAmino(object: _147.DescriptorProto_ReservedRangeAmino): _147.DescriptorProto_ReservedRange;
            toAmino(message: _147.DescriptorProto_ReservedRange): _147.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _147.DescriptorProto_ReservedRangeAminoMsg): _147.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _147.DescriptorProto_ReservedRangeProtoMsg): _147.DescriptorProto_ReservedRange;
            toProto(message: _147.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _147.DescriptorProto_ReservedRange): _147.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            typeUrl: string;
            encode(message: _147.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.ExtensionRangeOptions;
            fromPartial(object: Partial<_147.ExtensionRangeOptions>): _147.ExtensionRangeOptions;
            fromAmino(object: _147.ExtensionRangeOptionsAmino): _147.ExtensionRangeOptions;
            toAmino(message: _147.ExtensionRangeOptions): _147.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _147.ExtensionRangeOptionsAminoMsg): _147.ExtensionRangeOptions;
            fromProtoMsg(message: _147.ExtensionRangeOptionsProtoMsg): _147.ExtensionRangeOptions;
            toProto(message: _147.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _147.ExtensionRangeOptions): _147.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            typeUrl: string;
            encode(message: _147.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.FieldDescriptorProto;
            fromPartial(object: Partial<_147.FieldDescriptorProto>): _147.FieldDescriptorProto;
            fromAmino(object: _147.FieldDescriptorProtoAmino): _147.FieldDescriptorProto;
            toAmino(message: _147.FieldDescriptorProto): _147.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _147.FieldDescriptorProtoAminoMsg): _147.FieldDescriptorProto;
            fromProtoMsg(message: _147.FieldDescriptorProtoProtoMsg): _147.FieldDescriptorProto;
            toProto(message: _147.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _147.FieldDescriptorProto): _147.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            typeUrl: string;
            encode(message: _147.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.OneofDescriptorProto;
            fromPartial(object: Partial<_147.OneofDescriptorProto>): _147.OneofDescriptorProto;
            fromAmino(object: _147.OneofDescriptorProtoAmino): _147.OneofDescriptorProto;
            toAmino(message: _147.OneofDescriptorProto): _147.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _147.OneofDescriptorProtoAminoMsg): _147.OneofDescriptorProto;
            fromProtoMsg(message: _147.OneofDescriptorProtoProtoMsg): _147.OneofDescriptorProto;
            toProto(message: _147.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _147.OneofDescriptorProto): _147.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            typeUrl: string;
            encode(message: _147.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.EnumDescriptorProto;
            fromPartial(object: Partial<_147.EnumDescriptorProto>): _147.EnumDescriptorProto;
            fromAmino(object: _147.EnumDescriptorProtoAmino): _147.EnumDescriptorProto;
            toAmino(message: _147.EnumDescriptorProto): _147.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _147.EnumDescriptorProtoAminoMsg): _147.EnumDescriptorProto;
            fromProtoMsg(message: _147.EnumDescriptorProtoProtoMsg): _147.EnumDescriptorProto;
            toProto(message: _147.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _147.EnumDescriptorProto): _147.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            typeUrl: string;
            encode(message: _147.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_147.EnumDescriptorProto_EnumReservedRange>): _147.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _147.EnumDescriptorProto_EnumReservedRangeAmino): _147.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _147.EnumDescriptorProto_EnumReservedRange): _147.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _147.EnumDescriptorProto_EnumReservedRangeAminoMsg): _147.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _147.EnumDescriptorProto_EnumReservedRangeProtoMsg): _147.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _147.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _147.EnumDescriptorProto_EnumReservedRange): _147.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            typeUrl: string;
            encode(message: _147.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.EnumValueDescriptorProto;
            fromPartial(object: Partial<_147.EnumValueDescriptorProto>): _147.EnumValueDescriptorProto;
            fromAmino(object: _147.EnumValueDescriptorProtoAmino): _147.EnumValueDescriptorProto;
            toAmino(message: _147.EnumValueDescriptorProto): _147.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _147.EnumValueDescriptorProtoAminoMsg): _147.EnumValueDescriptorProto;
            fromProtoMsg(message: _147.EnumValueDescriptorProtoProtoMsg): _147.EnumValueDescriptorProto;
            toProto(message: _147.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _147.EnumValueDescriptorProto): _147.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            typeUrl: string;
            encode(message: _147.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.ServiceDescriptorProto;
            fromPartial(object: Partial<_147.ServiceDescriptorProto>): _147.ServiceDescriptorProto;
            fromAmino(object: _147.ServiceDescriptorProtoAmino): _147.ServiceDescriptorProto;
            toAmino(message: _147.ServiceDescriptorProto): _147.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _147.ServiceDescriptorProtoAminoMsg): _147.ServiceDescriptorProto;
            fromProtoMsg(message: _147.ServiceDescriptorProtoProtoMsg): _147.ServiceDescriptorProto;
            toProto(message: _147.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _147.ServiceDescriptorProto): _147.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            typeUrl: string;
            encode(message: _147.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.MethodDescriptorProto;
            fromPartial(object: Partial<_147.MethodDescriptorProto>): _147.MethodDescriptorProto;
            fromAmino(object: _147.MethodDescriptorProtoAmino): _147.MethodDescriptorProto;
            toAmino(message: _147.MethodDescriptorProto): _147.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _147.MethodDescriptorProtoAminoMsg): _147.MethodDescriptorProto;
            fromProtoMsg(message: _147.MethodDescriptorProtoProtoMsg): _147.MethodDescriptorProto;
            toProto(message: _147.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _147.MethodDescriptorProto): _147.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            typeUrl: string;
            encode(message: _147.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.FileOptions;
            fromPartial(object: Partial<_147.FileOptions>): _147.FileOptions;
            fromAmino(object: _147.FileOptionsAmino): _147.FileOptions;
            toAmino(message: _147.FileOptions): _147.FileOptionsAmino;
            fromAminoMsg(object: _147.FileOptionsAminoMsg): _147.FileOptions;
            fromProtoMsg(message: _147.FileOptionsProtoMsg): _147.FileOptions;
            toProto(message: _147.FileOptions): Uint8Array;
            toProtoMsg(message: _147.FileOptions): _147.FileOptionsProtoMsg;
        };
        MessageOptions: {
            typeUrl: string;
            encode(message: _147.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.MessageOptions;
            fromPartial(object: Partial<_147.MessageOptions>): _147.MessageOptions;
            fromAmino(object: _147.MessageOptionsAmino): _147.MessageOptions;
            toAmino(message: _147.MessageOptions): _147.MessageOptionsAmino;
            fromAminoMsg(object: _147.MessageOptionsAminoMsg): _147.MessageOptions;
            fromProtoMsg(message: _147.MessageOptionsProtoMsg): _147.MessageOptions;
            toProto(message: _147.MessageOptions): Uint8Array;
            toProtoMsg(message: _147.MessageOptions): _147.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            typeUrl: string;
            encode(message: _147.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.FieldOptions;
            fromPartial(object: Partial<_147.FieldOptions>): _147.FieldOptions;
            fromAmino(object: _147.FieldOptionsAmino): _147.FieldOptions;
            toAmino(message: _147.FieldOptions): _147.FieldOptionsAmino;
            fromAminoMsg(object: _147.FieldOptionsAminoMsg): _147.FieldOptions;
            fromProtoMsg(message: _147.FieldOptionsProtoMsg): _147.FieldOptions;
            toProto(message: _147.FieldOptions): Uint8Array;
            toProtoMsg(message: _147.FieldOptions): _147.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            typeUrl: string;
            encode(message: _147.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.OneofOptions;
            fromPartial(object: Partial<_147.OneofOptions>): _147.OneofOptions;
            fromAmino(object: _147.OneofOptionsAmino): _147.OneofOptions;
            toAmino(message: _147.OneofOptions): _147.OneofOptionsAmino;
            fromAminoMsg(object: _147.OneofOptionsAminoMsg): _147.OneofOptions;
            fromProtoMsg(message: _147.OneofOptionsProtoMsg): _147.OneofOptions;
            toProto(message: _147.OneofOptions): Uint8Array;
            toProtoMsg(message: _147.OneofOptions): _147.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            typeUrl: string;
            encode(message: _147.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.EnumOptions;
            fromPartial(object: Partial<_147.EnumOptions>): _147.EnumOptions;
            fromAmino(object: _147.EnumOptionsAmino): _147.EnumOptions;
            toAmino(message: _147.EnumOptions): _147.EnumOptionsAmino;
            fromAminoMsg(object: _147.EnumOptionsAminoMsg): _147.EnumOptions;
            fromProtoMsg(message: _147.EnumOptionsProtoMsg): _147.EnumOptions;
            toProto(message: _147.EnumOptions): Uint8Array;
            toProtoMsg(message: _147.EnumOptions): _147.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            typeUrl: string;
            encode(message: _147.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.EnumValueOptions;
            fromPartial(object: Partial<_147.EnumValueOptions>): _147.EnumValueOptions;
            fromAmino(object: _147.EnumValueOptionsAmino): _147.EnumValueOptions;
            toAmino(message: _147.EnumValueOptions): _147.EnumValueOptionsAmino;
            fromAminoMsg(object: _147.EnumValueOptionsAminoMsg): _147.EnumValueOptions;
            fromProtoMsg(message: _147.EnumValueOptionsProtoMsg): _147.EnumValueOptions;
            toProto(message: _147.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _147.EnumValueOptions): _147.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            typeUrl: string;
            encode(message: _147.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.ServiceOptions;
            fromPartial(object: Partial<_147.ServiceOptions>): _147.ServiceOptions;
            fromAmino(object: _147.ServiceOptionsAmino): _147.ServiceOptions;
            toAmino(message: _147.ServiceOptions): _147.ServiceOptionsAmino;
            fromAminoMsg(object: _147.ServiceOptionsAminoMsg): _147.ServiceOptions;
            fromProtoMsg(message: _147.ServiceOptionsProtoMsg): _147.ServiceOptions;
            toProto(message: _147.ServiceOptions): Uint8Array;
            toProtoMsg(message: _147.ServiceOptions): _147.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            typeUrl: string;
            encode(message: _147.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.MethodOptions;
            fromPartial(object: Partial<_147.MethodOptions>): _147.MethodOptions;
            fromAmino(object: _147.MethodOptionsAmino): _147.MethodOptions;
            toAmino(message: _147.MethodOptions): _147.MethodOptionsAmino;
            fromAminoMsg(object: _147.MethodOptionsAminoMsg): _147.MethodOptions;
            fromProtoMsg(message: _147.MethodOptionsProtoMsg): _147.MethodOptions;
            toProto(message: _147.MethodOptions): Uint8Array;
            toProtoMsg(message: _147.MethodOptions): _147.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            typeUrl: string;
            encode(message: _147.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.UninterpretedOption;
            fromPartial(object: Partial<_147.UninterpretedOption>): _147.UninterpretedOption;
            fromAmino(object: _147.UninterpretedOptionAmino): _147.UninterpretedOption;
            toAmino(message: _147.UninterpretedOption): _147.UninterpretedOptionAmino;
            fromAminoMsg(object: _147.UninterpretedOptionAminoMsg): _147.UninterpretedOption;
            fromProtoMsg(message: _147.UninterpretedOptionProtoMsg): _147.UninterpretedOption;
            toProto(message: _147.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _147.UninterpretedOption): _147.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            typeUrl: string;
            encode(message: _147.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_147.UninterpretedOption_NamePart>): _147.UninterpretedOption_NamePart;
            fromAmino(object: _147.UninterpretedOption_NamePartAmino): _147.UninterpretedOption_NamePart;
            toAmino(message: _147.UninterpretedOption_NamePart): _147.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _147.UninterpretedOption_NamePartAminoMsg): _147.UninterpretedOption_NamePart;
            fromProtoMsg(message: _147.UninterpretedOption_NamePartProtoMsg): _147.UninterpretedOption_NamePart;
            toProto(message: _147.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _147.UninterpretedOption_NamePart): _147.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            typeUrl: string;
            encode(message: _147.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.SourceCodeInfo;
            fromPartial(object: Partial<_147.SourceCodeInfo>): _147.SourceCodeInfo;
            fromAmino(object: _147.SourceCodeInfoAmino): _147.SourceCodeInfo;
            toAmino(message: _147.SourceCodeInfo): _147.SourceCodeInfoAmino;
            fromAminoMsg(object: _147.SourceCodeInfoAminoMsg): _147.SourceCodeInfo;
            fromProtoMsg(message: _147.SourceCodeInfoProtoMsg): _147.SourceCodeInfo;
            toProto(message: _147.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _147.SourceCodeInfo): _147.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            typeUrl: string;
            encode(message: _147.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.SourceCodeInfo_Location;
            fromPartial(object: Partial<_147.SourceCodeInfo_Location>): _147.SourceCodeInfo_Location;
            fromAmino(object: _147.SourceCodeInfo_LocationAmino): _147.SourceCodeInfo_Location;
            toAmino(message: _147.SourceCodeInfo_Location): _147.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _147.SourceCodeInfo_LocationAminoMsg): _147.SourceCodeInfo_Location;
            fromProtoMsg(message: _147.SourceCodeInfo_LocationProtoMsg): _147.SourceCodeInfo_Location;
            toProto(message: _147.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _147.SourceCodeInfo_Location): _147.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            typeUrl: string;
            encode(message: _147.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.GeneratedCodeInfo;
            fromPartial(object: Partial<_147.GeneratedCodeInfo>): _147.GeneratedCodeInfo;
            fromAmino(object: _147.GeneratedCodeInfoAmino): _147.GeneratedCodeInfo;
            toAmino(message: _147.GeneratedCodeInfo): _147.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _147.GeneratedCodeInfoAminoMsg): _147.GeneratedCodeInfo;
            fromProtoMsg(message: _147.GeneratedCodeInfoProtoMsg): _147.GeneratedCodeInfo;
            toProto(message: _147.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _147.GeneratedCodeInfo): _147.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            typeUrl: string;
            encode(message: _147.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _147.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_147.GeneratedCodeInfo_Annotation>): _147.GeneratedCodeInfo_Annotation;
            fromAmino(object: _147.GeneratedCodeInfo_AnnotationAmino): _147.GeneratedCodeInfo_Annotation;
            toAmino(message: _147.GeneratedCodeInfo_Annotation): _147.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _147.GeneratedCodeInfo_AnnotationAminoMsg): _147.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _147.GeneratedCodeInfo_AnnotationProtoMsg): _147.GeneratedCodeInfo_Annotation;
            toProto(message: _147.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _147.GeneratedCodeInfo_Annotation): _147.GeneratedCodeInfo_AnnotationProtoMsg;
        };
        Any: {
            typeUrl: string;
            encode(message: _146.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _146.Any;
            fromPartial(object: Partial<_146.Any>): _146.Any;
            fromAmino(object: _146.AnyAmino): _146.Any;
            toAmino(message: _146.Any): _146.AnyAmino;
            fromAminoMsg(object: _146.AnyAminoMsg): _146.Any;
            fromProtoMsg(message: _146.AnyProtoMsg): _146.Any;
            toProto(message: _146.Any): Uint8Array;
            toProtoMsg(message: _146.Any): _146.AnyProtoMsg;
        };
    };
}
