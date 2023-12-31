import * as _99 from "./api/http";
import * as _100 from "./protobuf/any";
import * as _101 from "./protobuf/timestamp";
import * as _102 from "./protobuf/duration";
import * as _103 from "./protobuf/descriptor";
export declare namespace google {
    const api: {
        Http: {
            typeUrl: string;
            encode(message: _99.Http, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _99.Http;
            fromPartial(object: Partial<_99.Http>): _99.Http;
            fromAmino(object: _99.HttpAmino): _99.Http;
            toAmino(message: _99.Http): _99.HttpAmino;
            fromAminoMsg(object: _99.HttpAminoMsg): _99.Http;
            fromProtoMsg(message: _99.HttpProtoMsg): _99.Http;
            toProto(message: _99.Http): Uint8Array;
            toProtoMsg(message: _99.Http): _99.HttpProtoMsg;
        };
        HttpRule: {
            typeUrl: string;
            encode(message: _99.HttpRule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _99.HttpRule;
            fromPartial(object: Partial<_99.HttpRule>): _99.HttpRule;
            fromAmino(object: _99.HttpRuleAmino): _99.HttpRule;
            toAmino(message: _99.HttpRule): _99.HttpRuleAmino;
            fromAminoMsg(object: _99.HttpRuleAminoMsg): _99.HttpRule;
            fromProtoMsg(message: _99.HttpRuleProtoMsg): _99.HttpRule;
            toProto(message: _99.HttpRule): Uint8Array;
            toProtoMsg(message: _99.HttpRule): _99.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            typeUrl: string;
            encode(message: _99.CustomHttpPattern, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _99.CustomHttpPattern;
            fromPartial(object: Partial<_99.CustomHttpPattern>): _99.CustomHttpPattern;
            fromAmino(object: _99.CustomHttpPatternAmino): _99.CustomHttpPattern;
            toAmino(message: _99.CustomHttpPattern): _99.CustomHttpPatternAmino;
            fromAminoMsg(object: _99.CustomHttpPatternAminoMsg): _99.CustomHttpPattern;
            fromProtoMsg(message: _99.CustomHttpPatternProtoMsg): _99.CustomHttpPattern;
            toProto(message: _99.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _99.CustomHttpPattern): _99.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _103.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _103.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _103.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _103.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _103.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _103.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _103.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _103.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _103.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _103.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _103.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _103.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _103.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _103.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _103.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _103.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _103.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _103.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _103.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _103.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _103.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _103.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _103.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _103.FieldOptions_CType;
        FieldOptions_JSType: typeof _103.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _103.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _103.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _103.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _103.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _103.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            typeUrl: string;
            encode(message: _103.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.FileDescriptorSet;
            fromPartial(object: Partial<_103.FileDescriptorSet>): _103.FileDescriptorSet;
            fromAmino(object: _103.FileDescriptorSetAmino): _103.FileDescriptorSet;
            toAmino(message: _103.FileDescriptorSet): _103.FileDescriptorSetAmino;
            fromAminoMsg(object: _103.FileDescriptorSetAminoMsg): _103.FileDescriptorSet;
            fromProtoMsg(message: _103.FileDescriptorSetProtoMsg): _103.FileDescriptorSet;
            toProto(message: _103.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _103.FileDescriptorSet): _103.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            typeUrl: string;
            encode(message: _103.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.FileDescriptorProto;
            fromPartial(object: Partial<_103.FileDescriptorProto>): _103.FileDescriptorProto;
            fromAmino(object: _103.FileDescriptorProtoAmino): _103.FileDescriptorProto;
            toAmino(message: _103.FileDescriptorProto): _103.FileDescriptorProtoAmino;
            fromAminoMsg(object: _103.FileDescriptorProtoAminoMsg): _103.FileDescriptorProto;
            fromProtoMsg(message: _103.FileDescriptorProtoProtoMsg): _103.FileDescriptorProto;
            toProto(message: _103.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _103.FileDescriptorProto): _103.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            typeUrl: string;
            encode(message: _103.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.DescriptorProto;
            fromPartial(object: Partial<_103.DescriptorProto>): _103.DescriptorProto;
            fromAmino(object: _103.DescriptorProtoAmino): _103.DescriptorProto;
            toAmino(message: _103.DescriptorProto): _103.DescriptorProtoAmino;
            fromAminoMsg(object: _103.DescriptorProtoAminoMsg): _103.DescriptorProto;
            fromProtoMsg(message: _103.DescriptorProtoProtoMsg): _103.DescriptorProto;
            toProto(message: _103.DescriptorProto): Uint8Array;
            toProtoMsg(message: _103.DescriptorProto): _103.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            typeUrl: string;
            encode(message: _103.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_103.DescriptorProto_ExtensionRange>): _103.DescriptorProto_ExtensionRange;
            fromAmino(object: _103.DescriptorProto_ExtensionRangeAmino): _103.DescriptorProto_ExtensionRange;
            toAmino(message: _103.DescriptorProto_ExtensionRange): _103.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _103.DescriptorProto_ExtensionRangeAminoMsg): _103.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _103.DescriptorProto_ExtensionRangeProtoMsg): _103.DescriptorProto_ExtensionRange;
            toProto(message: _103.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _103.DescriptorProto_ExtensionRange): _103.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            typeUrl: string;
            encode(message: _103.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_103.DescriptorProto_ReservedRange>): _103.DescriptorProto_ReservedRange;
            fromAmino(object: _103.DescriptorProto_ReservedRangeAmino): _103.DescriptorProto_ReservedRange;
            toAmino(message: _103.DescriptorProto_ReservedRange): _103.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _103.DescriptorProto_ReservedRangeAminoMsg): _103.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _103.DescriptorProto_ReservedRangeProtoMsg): _103.DescriptorProto_ReservedRange;
            toProto(message: _103.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _103.DescriptorProto_ReservedRange): _103.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            typeUrl: string;
            encode(message: _103.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.ExtensionRangeOptions;
            fromPartial(object: Partial<_103.ExtensionRangeOptions>): _103.ExtensionRangeOptions;
            fromAmino(object: _103.ExtensionRangeOptionsAmino): _103.ExtensionRangeOptions;
            toAmino(message: _103.ExtensionRangeOptions): _103.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _103.ExtensionRangeOptionsAminoMsg): _103.ExtensionRangeOptions;
            fromProtoMsg(message: _103.ExtensionRangeOptionsProtoMsg): _103.ExtensionRangeOptions;
            toProto(message: _103.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _103.ExtensionRangeOptions): _103.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            typeUrl: string;
            encode(message: _103.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.FieldDescriptorProto;
            fromPartial(object: Partial<_103.FieldDescriptorProto>): _103.FieldDescriptorProto;
            fromAmino(object: _103.FieldDescriptorProtoAmino): _103.FieldDescriptorProto;
            toAmino(message: _103.FieldDescriptorProto): _103.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _103.FieldDescriptorProtoAminoMsg): _103.FieldDescriptorProto;
            fromProtoMsg(message: _103.FieldDescriptorProtoProtoMsg): _103.FieldDescriptorProto;
            toProto(message: _103.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _103.FieldDescriptorProto): _103.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            typeUrl: string;
            encode(message: _103.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.OneofDescriptorProto;
            fromPartial(object: Partial<_103.OneofDescriptorProto>): _103.OneofDescriptorProto;
            fromAmino(object: _103.OneofDescriptorProtoAmino): _103.OneofDescriptorProto;
            toAmino(message: _103.OneofDescriptorProto): _103.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _103.OneofDescriptorProtoAminoMsg): _103.OneofDescriptorProto;
            fromProtoMsg(message: _103.OneofDescriptorProtoProtoMsg): _103.OneofDescriptorProto;
            toProto(message: _103.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _103.OneofDescriptorProto): _103.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            typeUrl: string;
            encode(message: _103.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.EnumDescriptorProto;
            fromPartial(object: Partial<_103.EnumDescriptorProto>): _103.EnumDescriptorProto;
            fromAmino(object: _103.EnumDescriptorProtoAmino): _103.EnumDescriptorProto;
            toAmino(message: _103.EnumDescriptorProto): _103.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _103.EnumDescriptorProtoAminoMsg): _103.EnumDescriptorProto;
            fromProtoMsg(message: _103.EnumDescriptorProtoProtoMsg): _103.EnumDescriptorProto;
            toProto(message: _103.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _103.EnumDescriptorProto): _103.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            typeUrl: string;
            encode(message: _103.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_103.EnumDescriptorProto_EnumReservedRange>): _103.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _103.EnumDescriptorProto_EnumReservedRangeAmino): _103.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _103.EnumDescriptorProto_EnumReservedRange): _103.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _103.EnumDescriptorProto_EnumReservedRangeAminoMsg): _103.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _103.EnumDescriptorProto_EnumReservedRangeProtoMsg): _103.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _103.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _103.EnumDescriptorProto_EnumReservedRange): _103.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            typeUrl: string;
            encode(message: _103.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.EnumValueDescriptorProto;
            fromPartial(object: Partial<_103.EnumValueDescriptorProto>): _103.EnumValueDescriptorProto;
            fromAmino(object: _103.EnumValueDescriptorProtoAmino): _103.EnumValueDescriptorProto;
            toAmino(message: _103.EnumValueDescriptorProto): _103.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _103.EnumValueDescriptorProtoAminoMsg): _103.EnumValueDescriptorProto;
            fromProtoMsg(message: _103.EnumValueDescriptorProtoProtoMsg): _103.EnumValueDescriptorProto;
            toProto(message: _103.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _103.EnumValueDescriptorProto): _103.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            typeUrl: string;
            encode(message: _103.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.ServiceDescriptorProto;
            fromPartial(object: Partial<_103.ServiceDescriptorProto>): _103.ServiceDescriptorProto;
            fromAmino(object: _103.ServiceDescriptorProtoAmino): _103.ServiceDescriptorProto;
            toAmino(message: _103.ServiceDescriptorProto): _103.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _103.ServiceDescriptorProtoAminoMsg): _103.ServiceDescriptorProto;
            fromProtoMsg(message: _103.ServiceDescriptorProtoProtoMsg): _103.ServiceDescriptorProto;
            toProto(message: _103.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _103.ServiceDescriptorProto): _103.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            typeUrl: string;
            encode(message: _103.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.MethodDescriptorProto;
            fromPartial(object: Partial<_103.MethodDescriptorProto>): _103.MethodDescriptorProto;
            fromAmino(object: _103.MethodDescriptorProtoAmino): _103.MethodDescriptorProto;
            toAmino(message: _103.MethodDescriptorProto): _103.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _103.MethodDescriptorProtoAminoMsg): _103.MethodDescriptorProto;
            fromProtoMsg(message: _103.MethodDescriptorProtoProtoMsg): _103.MethodDescriptorProto;
            toProto(message: _103.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _103.MethodDescriptorProto): _103.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            typeUrl: string;
            encode(message: _103.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.FileOptions;
            fromPartial(object: Partial<_103.FileOptions>): _103.FileOptions;
            fromAmino(object: _103.FileOptionsAmino): _103.FileOptions;
            toAmino(message: _103.FileOptions): _103.FileOptionsAmino;
            fromAminoMsg(object: _103.FileOptionsAminoMsg): _103.FileOptions;
            fromProtoMsg(message: _103.FileOptionsProtoMsg): _103.FileOptions;
            toProto(message: _103.FileOptions): Uint8Array;
            toProtoMsg(message: _103.FileOptions): _103.FileOptionsProtoMsg;
        };
        MessageOptions: {
            typeUrl: string;
            encode(message: _103.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.MessageOptions;
            fromPartial(object: Partial<_103.MessageOptions>): _103.MessageOptions;
            fromAmino(object: _103.MessageOptionsAmino): _103.MessageOptions;
            toAmino(message: _103.MessageOptions): _103.MessageOptionsAmino;
            fromAminoMsg(object: _103.MessageOptionsAminoMsg): _103.MessageOptions;
            fromProtoMsg(message: _103.MessageOptionsProtoMsg): _103.MessageOptions;
            toProto(message: _103.MessageOptions): Uint8Array;
            toProtoMsg(message: _103.MessageOptions): _103.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            typeUrl: string;
            encode(message: _103.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.FieldOptions;
            fromPartial(object: Partial<_103.FieldOptions>): _103.FieldOptions;
            fromAmino(object: _103.FieldOptionsAmino): _103.FieldOptions;
            toAmino(message: _103.FieldOptions): _103.FieldOptionsAmino;
            fromAminoMsg(object: _103.FieldOptionsAminoMsg): _103.FieldOptions;
            fromProtoMsg(message: _103.FieldOptionsProtoMsg): _103.FieldOptions;
            toProto(message: _103.FieldOptions): Uint8Array;
            toProtoMsg(message: _103.FieldOptions): _103.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            typeUrl: string;
            encode(message: _103.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.OneofOptions;
            fromPartial(object: Partial<_103.OneofOptions>): _103.OneofOptions;
            fromAmino(object: _103.OneofOptionsAmino): _103.OneofOptions;
            toAmino(message: _103.OneofOptions): _103.OneofOptionsAmino;
            fromAminoMsg(object: _103.OneofOptionsAminoMsg): _103.OneofOptions;
            fromProtoMsg(message: _103.OneofOptionsProtoMsg): _103.OneofOptions;
            toProto(message: _103.OneofOptions): Uint8Array;
            toProtoMsg(message: _103.OneofOptions): _103.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            typeUrl: string;
            encode(message: _103.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.EnumOptions;
            fromPartial(object: Partial<_103.EnumOptions>): _103.EnumOptions;
            fromAmino(object: _103.EnumOptionsAmino): _103.EnumOptions;
            toAmino(message: _103.EnumOptions): _103.EnumOptionsAmino;
            fromAminoMsg(object: _103.EnumOptionsAminoMsg): _103.EnumOptions;
            fromProtoMsg(message: _103.EnumOptionsProtoMsg): _103.EnumOptions;
            toProto(message: _103.EnumOptions): Uint8Array;
            toProtoMsg(message: _103.EnumOptions): _103.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            typeUrl: string;
            encode(message: _103.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.EnumValueOptions;
            fromPartial(object: Partial<_103.EnumValueOptions>): _103.EnumValueOptions;
            fromAmino(object: _103.EnumValueOptionsAmino): _103.EnumValueOptions;
            toAmino(message: _103.EnumValueOptions): _103.EnumValueOptionsAmino;
            fromAminoMsg(object: _103.EnumValueOptionsAminoMsg): _103.EnumValueOptions;
            fromProtoMsg(message: _103.EnumValueOptionsProtoMsg): _103.EnumValueOptions;
            toProto(message: _103.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _103.EnumValueOptions): _103.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            typeUrl: string;
            encode(message: _103.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.ServiceOptions;
            fromPartial(object: Partial<_103.ServiceOptions>): _103.ServiceOptions;
            fromAmino(object: _103.ServiceOptionsAmino): _103.ServiceOptions;
            toAmino(message: _103.ServiceOptions): _103.ServiceOptionsAmino;
            fromAminoMsg(object: _103.ServiceOptionsAminoMsg): _103.ServiceOptions;
            fromProtoMsg(message: _103.ServiceOptionsProtoMsg): _103.ServiceOptions;
            toProto(message: _103.ServiceOptions): Uint8Array;
            toProtoMsg(message: _103.ServiceOptions): _103.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            typeUrl: string;
            encode(message: _103.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.MethodOptions;
            fromPartial(object: Partial<_103.MethodOptions>): _103.MethodOptions;
            fromAmino(object: _103.MethodOptionsAmino): _103.MethodOptions;
            toAmino(message: _103.MethodOptions): _103.MethodOptionsAmino;
            fromAminoMsg(object: _103.MethodOptionsAminoMsg): _103.MethodOptions;
            fromProtoMsg(message: _103.MethodOptionsProtoMsg): _103.MethodOptions;
            toProto(message: _103.MethodOptions): Uint8Array;
            toProtoMsg(message: _103.MethodOptions): _103.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            typeUrl: string;
            encode(message: _103.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.UninterpretedOption;
            fromPartial(object: Partial<_103.UninterpretedOption>): _103.UninterpretedOption;
            fromAmino(object: _103.UninterpretedOptionAmino): _103.UninterpretedOption;
            toAmino(message: _103.UninterpretedOption): _103.UninterpretedOptionAmino;
            fromAminoMsg(object: _103.UninterpretedOptionAminoMsg): _103.UninterpretedOption;
            fromProtoMsg(message: _103.UninterpretedOptionProtoMsg): _103.UninterpretedOption;
            toProto(message: _103.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _103.UninterpretedOption): _103.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            typeUrl: string;
            encode(message: _103.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_103.UninterpretedOption_NamePart>): _103.UninterpretedOption_NamePart;
            fromAmino(object: _103.UninterpretedOption_NamePartAmino): _103.UninterpretedOption_NamePart;
            toAmino(message: _103.UninterpretedOption_NamePart): _103.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _103.UninterpretedOption_NamePartAminoMsg): _103.UninterpretedOption_NamePart;
            fromProtoMsg(message: _103.UninterpretedOption_NamePartProtoMsg): _103.UninterpretedOption_NamePart;
            toProto(message: _103.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _103.UninterpretedOption_NamePart): _103.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            typeUrl: string;
            encode(message: _103.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.SourceCodeInfo;
            fromPartial(object: Partial<_103.SourceCodeInfo>): _103.SourceCodeInfo;
            fromAmino(object: _103.SourceCodeInfoAmino): _103.SourceCodeInfo;
            toAmino(message: _103.SourceCodeInfo): _103.SourceCodeInfoAmino;
            fromAminoMsg(object: _103.SourceCodeInfoAminoMsg): _103.SourceCodeInfo;
            fromProtoMsg(message: _103.SourceCodeInfoProtoMsg): _103.SourceCodeInfo;
            toProto(message: _103.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _103.SourceCodeInfo): _103.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            typeUrl: string;
            encode(message: _103.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.SourceCodeInfo_Location;
            fromPartial(object: Partial<_103.SourceCodeInfo_Location>): _103.SourceCodeInfo_Location;
            fromAmino(object: _103.SourceCodeInfo_LocationAmino): _103.SourceCodeInfo_Location;
            toAmino(message: _103.SourceCodeInfo_Location): _103.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _103.SourceCodeInfo_LocationAminoMsg): _103.SourceCodeInfo_Location;
            fromProtoMsg(message: _103.SourceCodeInfo_LocationProtoMsg): _103.SourceCodeInfo_Location;
            toProto(message: _103.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _103.SourceCodeInfo_Location): _103.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            typeUrl: string;
            encode(message: _103.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.GeneratedCodeInfo;
            fromPartial(object: Partial<_103.GeneratedCodeInfo>): _103.GeneratedCodeInfo;
            fromAmino(object: _103.GeneratedCodeInfoAmino): _103.GeneratedCodeInfo;
            toAmino(message: _103.GeneratedCodeInfo): _103.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _103.GeneratedCodeInfoAminoMsg): _103.GeneratedCodeInfo;
            fromProtoMsg(message: _103.GeneratedCodeInfoProtoMsg): _103.GeneratedCodeInfo;
            toProto(message: _103.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _103.GeneratedCodeInfo): _103.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            typeUrl: string;
            encode(message: _103.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_103.GeneratedCodeInfo_Annotation>): _103.GeneratedCodeInfo_Annotation;
            fromAmino(object: _103.GeneratedCodeInfo_AnnotationAmino): _103.GeneratedCodeInfo_Annotation;
            toAmino(message: _103.GeneratedCodeInfo_Annotation): _103.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _103.GeneratedCodeInfo_AnnotationAminoMsg): _103.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _103.GeneratedCodeInfo_AnnotationProtoMsg): _103.GeneratedCodeInfo_Annotation;
            toProto(message: _103.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _103.GeneratedCodeInfo_Annotation): _103.GeneratedCodeInfo_AnnotationProtoMsg;
        };
        Duration: {
            typeUrl: string;
            encode(message: _102.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _102.Duration;
            fromPartial(object: Partial<_102.Duration>): _102.Duration;
            fromAmino(object: string): _102.Duration;
            toAmino(message: _102.Duration): string;
            fromAminoMsg(object: _102.DurationAminoMsg): _102.Duration;
            fromProtoMsg(message: _102.DurationProtoMsg): _102.Duration;
            toProto(message: _102.Duration): Uint8Array;
            toProtoMsg(message: _102.Duration): _102.DurationProtoMsg;
        };
        Timestamp: {
            typeUrl: string;
            encode(message: _101.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _101.Timestamp;
            fromPartial(object: Partial<_101.Timestamp>): _101.Timestamp;
            fromAmino(object: string): _101.Timestamp;
            toAmino(message: _101.Timestamp): string;
            fromAminoMsg(object: _101.TimestampAminoMsg): _101.Timestamp;
            fromProtoMsg(message: _101.TimestampProtoMsg): _101.Timestamp;
            toProto(message: _101.Timestamp): Uint8Array;
            toProtoMsg(message: _101.Timestamp): _101.TimestampProtoMsg;
        };
        Any: {
            typeUrl: string;
            encode(message: _100.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _100.Any;
            fromPartial(object: Partial<_100.Any>): _100.Any;
            fromAmino(object: _100.AnyAmino): _100.Any;
            toAmino(message: _100.Any): _100.AnyAmino;
            fromAminoMsg(object: _100.AnyAminoMsg): _100.Any;
            fromProtoMsg(message: _100.AnyProtoMsg): _100.Any;
            toProto(message: _100.Any): Uint8Array;
            toProtoMsg(message: _100.Any): _100.AnyProtoMsg;
        };
    };
}
