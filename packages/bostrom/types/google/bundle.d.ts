import * as _102 from "./api/http";
import * as _103 from "./protobuf/any";
import * as _104 from "./protobuf/timestamp";
import * as _105 from "./protobuf/duration";
import * as _106 from "./protobuf/descriptor";
export declare namespace google {
    const api: {
        Http: {
            typeUrl: string;
            encode(message: _102.Http, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _102.Http;
            fromPartial(object: Partial<_102.Http>): _102.Http;
            fromAmino(object: _102.HttpAmino): _102.Http;
            toAmino(message: _102.Http): _102.HttpAmino;
            fromAminoMsg(object: _102.HttpAminoMsg): _102.Http;
            fromProtoMsg(message: _102.HttpProtoMsg): _102.Http;
            toProto(message: _102.Http): Uint8Array;
            toProtoMsg(message: _102.Http): _102.HttpProtoMsg;
        };
        HttpRule: {
            typeUrl: string;
            encode(message: _102.HttpRule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _102.HttpRule;
            fromPartial(object: Partial<_102.HttpRule>): _102.HttpRule;
            fromAmino(object: _102.HttpRuleAmino): _102.HttpRule;
            toAmino(message: _102.HttpRule): _102.HttpRuleAmino;
            fromAminoMsg(object: _102.HttpRuleAminoMsg): _102.HttpRule;
            fromProtoMsg(message: _102.HttpRuleProtoMsg): _102.HttpRule;
            toProto(message: _102.HttpRule): Uint8Array;
            toProtoMsg(message: _102.HttpRule): _102.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            typeUrl: string;
            encode(message: _102.CustomHttpPattern, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _102.CustomHttpPattern;
            fromPartial(object: Partial<_102.CustomHttpPattern>): _102.CustomHttpPattern;
            fromAmino(object: _102.CustomHttpPatternAmino): _102.CustomHttpPattern;
            toAmino(message: _102.CustomHttpPattern): _102.CustomHttpPatternAmino;
            fromAminoMsg(object: _102.CustomHttpPatternAminoMsg): _102.CustomHttpPattern;
            fromProtoMsg(message: _102.CustomHttpPatternProtoMsg): _102.CustomHttpPattern;
            toProto(message: _102.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _102.CustomHttpPattern): _102.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _106.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _106.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _106.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _106.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _106.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _106.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _106.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _106.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _106.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _106.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _106.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _106.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _106.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _106.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _106.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _106.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _106.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _106.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _106.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _106.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _106.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _106.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _106.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _106.FieldOptions_CType;
        FieldOptions_JSType: typeof _106.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _106.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _106.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _106.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _106.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _106.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            typeUrl: string;
            encode(message: _106.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.FileDescriptorSet;
            fromPartial(object: Partial<_106.FileDescriptorSet>): _106.FileDescriptorSet;
            fromAmino(object: _106.FileDescriptorSetAmino): _106.FileDescriptorSet;
            toAmino(message: _106.FileDescriptorSet): _106.FileDescriptorSetAmino;
            fromAminoMsg(object: _106.FileDescriptorSetAminoMsg): _106.FileDescriptorSet;
            fromProtoMsg(message: _106.FileDescriptorSetProtoMsg): _106.FileDescriptorSet;
            toProto(message: _106.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _106.FileDescriptorSet): _106.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            typeUrl: string;
            encode(message: _106.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.FileDescriptorProto;
            fromPartial(object: Partial<_106.FileDescriptorProto>): _106.FileDescriptorProto;
            fromAmino(object: _106.FileDescriptorProtoAmino): _106.FileDescriptorProto;
            toAmino(message: _106.FileDescriptorProto): _106.FileDescriptorProtoAmino;
            fromAminoMsg(object: _106.FileDescriptorProtoAminoMsg): _106.FileDescriptorProto;
            fromProtoMsg(message: _106.FileDescriptorProtoProtoMsg): _106.FileDescriptorProto;
            toProto(message: _106.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _106.FileDescriptorProto): _106.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            typeUrl: string;
            encode(message: _106.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.DescriptorProto;
            fromPartial(object: Partial<_106.DescriptorProto>): _106.DescriptorProto;
            fromAmino(object: _106.DescriptorProtoAmino): _106.DescriptorProto;
            toAmino(message: _106.DescriptorProto): _106.DescriptorProtoAmino;
            fromAminoMsg(object: _106.DescriptorProtoAminoMsg): _106.DescriptorProto;
            fromProtoMsg(message: _106.DescriptorProtoProtoMsg): _106.DescriptorProto;
            toProto(message: _106.DescriptorProto): Uint8Array;
            toProtoMsg(message: _106.DescriptorProto): _106.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            typeUrl: string;
            encode(message: _106.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_106.DescriptorProto_ExtensionRange>): _106.DescriptorProto_ExtensionRange;
            fromAmino(object: _106.DescriptorProto_ExtensionRangeAmino): _106.DescriptorProto_ExtensionRange;
            toAmino(message: _106.DescriptorProto_ExtensionRange): _106.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _106.DescriptorProto_ExtensionRangeAminoMsg): _106.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _106.DescriptorProto_ExtensionRangeProtoMsg): _106.DescriptorProto_ExtensionRange;
            toProto(message: _106.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _106.DescriptorProto_ExtensionRange): _106.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            typeUrl: string;
            encode(message: _106.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_106.DescriptorProto_ReservedRange>): _106.DescriptorProto_ReservedRange;
            fromAmino(object: _106.DescriptorProto_ReservedRangeAmino): _106.DescriptorProto_ReservedRange;
            toAmino(message: _106.DescriptorProto_ReservedRange): _106.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _106.DescriptorProto_ReservedRangeAminoMsg): _106.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _106.DescriptorProto_ReservedRangeProtoMsg): _106.DescriptorProto_ReservedRange;
            toProto(message: _106.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _106.DescriptorProto_ReservedRange): _106.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            typeUrl: string;
            encode(message: _106.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.ExtensionRangeOptions;
            fromPartial(object: Partial<_106.ExtensionRangeOptions>): _106.ExtensionRangeOptions;
            fromAmino(object: _106.ExtensionRangeOptionsAmino): _106.ExtensionRangeOptions;
            toAmino(message: _106.ExtensionRangeOptions): _106.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _106.ExtensionRangeOptionsAminoMsg): _106.ExtensionRangeOptions;
            fromProtoMsg(message: _106.ExtensionRangeOptionsProtoMsg): _106.ExtensionRangeOptions;
            toProto(message: _106.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _106.ExtensionRangeOptions): _106.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            typeUrl: string;
            encode(message: _106.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.FieldDescriptorProto;
            fromPartial(object: Partial<_106.FieldDescriptorProto>): _106.FieldDescriptorProto;
            fromAmino(object: _106.FieldDescriptorProtoAmino): _106.FieldDescriptorProto;
            toAmino(message: _106.FieldDescriptorProto): _106.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _106.FieldDescriptorProtoAminoMsg): _106.FieldDescriptorProto;
            fromProtoMsg(message: _106.FieldDescriptorProtoProtoMsg): _106.FieldDescriptorProto;
            toProto(message: _106.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _106.FieldDescriptorProto): _106.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            typeUrl: string;
            encode(message: _106.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.OneofDescriptorProto;
            fromPartial(object: Partial<_106.OneofDescriptorProto>): _106.OneofDescriptorProto;
            fromAmino(object: _106.OneofDescriptorProtoAmino): _106.OneofDescriptorProto;
            toAmino(message: _106.OneofDescriptorProto): _106.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _106.OneofDescriptorProtoAminoMsg): _106.OneofDescriptorProto;
            fromProtoMsg(message: _106.OneofDescriptorProtoProtoMsg): _106.OneofDescriptorProto;
            toProto(message: _106.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _106.OneofDescriptorProto): _106.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            typeUrl: string;
            encode(message: _106.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.EnumDescriptorProto;
            fromPartial(object: Partial<_106.EnumDescriptorProto>): _106.EnumDescriptorProto;
            fromAmino(object: _106.EnumDescriptorProtoAmino): _106.EnumDescriptorProto;
            toAmino(message: _106.EnumDescriptorProto): _106.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _106.EnumDescriptorProtoAminoMsg): _106.EnumDescriptorProto;
            fromProtoMsg(message: _106.EnumDescriptorProtoProtoMsg): _106.EnumDescriptorProto;
            toProto(message: _106.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _106.EnumDescriptorProto): _106.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            typeUrl: string;
            encode(message: _106.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_106.EnumDescriptorProto_EnumReservedRange>): _106.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _106.EnumDescriptorProto_EnumReservedRangeAmino): _106.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _106.EnumDescriptorProto_EnumReservedRange): _106.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _106.EnumDescriptorProto_EnumReservedRangeAminoMsg): _106.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _106.EnumDescriptorProto_EnumReservedRangeProtoMsg): _106.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _106.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _106.EnumDescriptorProto_EnumReservedRange): _106.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            typeUrl: string;
            encode(message: _106.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.EnumValueDescriptorProto;
            fromPartial(object: Partial<_106.EnumValueDescriptorProto>): _106.EnumValueDescriptorProto;
            fromAmino(object: _106.EnumValueDescriptorProtoAmino): _106.EnumValueDescriptorProto;
            toAmino(message: _106.EnumValueDescriptorProto): _106.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _106.EnumValueDescriptorProtoAminoMsg): _106.EnumValueDescriptorProto;
            fromProtoMsg(message: _106.EnumValueDescriptorProtoProtoMsg): _106.EnumValueDescriptorProto;
            toProto(message: _106.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _106.EnumValueDescriptorProto): _106.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            typeUrl: string;
            encode(message: _106.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.ServiceDescriptorProto;
            fromPartial(object: Partial<_106.ServiceDescriptorProto>): _106.ServiceDescriptorProto;
            fromAmino(object: _106.ServiceDescriptorProtoAmino): _106.ServiceDescriptorProto;
            toAmino(message: _106.ServiceDescriptorProto): _106.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _106.ServiceDescriptorProtoAminoMsg): _106.ServiceDescriptorProto;
            fromProtoMsg(message: _106.ServiceDescriptorProtoProtoMsg): _106.ServiceDescriptorProto;
            toProto(message: _106.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _106.ServiceDescriptorProto): _106.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            typeUrl: string;
            encode(message: _106.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.MethodDescriptorProto;
            fromPartial(object: Partial<_106.MethodDescriptorProto>): _106.MethodDescriptorProto;
            fromAmino(object: _106.MethodDescriptorProtoAmino): _106.MethodDescriptorProto;
            toAmino(message: _106.MethodDescriptorProto): _106.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _106.MethodDescriptorProtoAminoMsg): _106.MethodDescriptorProto;
            fromProtoMsg(message: _106.MethodDescriptorProtoProtoMsg): _106.MethodDescriptorProto;
            toProto(message: _106.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _106.MethodDescriptorProto): _106.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            typeUrl: string;
            encode(message: _106.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.FileOptions;
            fromPartial(object: Partial<_106.FileOptions>): _106.FileOptions;
            fromAmino(object: _106.FileOptionsAmino): _106.FileOptions;
            toAmino(message: _106.FileOptions): _106.FileOptionsAmino;
            fromAminoMsg(object: _106.FileOptionsAminoMsg): _106.FileOptions;
            fromProtoMsg(message: _106.FileOptionsProtoMsg): _106.FileOptions;
            toProto(message: _106.FileOptions): Uint8Array;
            toProtoMsg(message: _106.FileOptions): _106.FileOptionsProtoMsg;
        };
        MessageOptions: {
            typeUrl: string;
            encode(message: _106.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.MessageOptions;
            fromPartial(object: Partial<_106.MessageOptions>): _106.MessageOptions;
            fromAmino(object: _106.MessageOptionsAmino): _106.MessageOptions;
            toAmino(message: _106.MessageOptions): _106.MessageOptionsAmino;
            fromAminoMsg(object: _106.MessageOptionsAminoMsg): _106.MessageOptions;
            fromProtoMsg(message: _106.MessageOptionsProtoMsg): _106.MessageOptions;
            toProto(message: _106.MessageOptions): Uint8Array;
            toProtoMsg(message: _106.MessageOptions): _106.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            typeUrl: string;
            encode(message: _106.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.FieldOptions;
            fromPartial(object: Partial<_106.FieldOptions>): _106.FieldOptions;
            fromAmino(object: _106.FieldOptionsAmino): _106.FieldOptions;
            toAmino(message: _106.FieldOptions): _106.FieldOptionsAmino;
            fromAminoMsg(object: _106.FieldOptionsAminoMsg): _106.FieldOptions;
            fromProtoMsg(message: _106.FieldOptionsProtoMsg): _106.FieldOptions;
            toProto(message: _106.FieldOptions): Uint8Array;
            toProtoMsg(message: _106.FieldOptions): _106.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            typeUrl: string;
            encode(message: _106.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.OneofOptions;
            fromPartial(object: Partial<_106.OneofOptions>): _106.OneofOptions;
            fromAmino(object: _106.OneofOptionsAmino): _106.OneofOptions;
            toAmino(message: _106.OneofOptions): _106.OneofOptionsAmino;
            fromAminoMsg(object: _106.OneofOptionsAminoMsg): _106.OneofOptions;
            fromProtoMsg(message: _106.OneofOptionsProtoMsg): _106.OneofOptions;
            toProto(message: _106.OneofOptions): Uint8Array;
            toProtoMsg(message: _106.OneofOptions): _106.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            typeUrl: string;
            encode(message: _106.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.EnumOptions;
            fromPartial(object: Partial<_106.EnumOptions>): _106.EnumOptions;
            fromAmino(object: _106.EnumOptionsAmino): _106.EnumOptions;
            toAmino(message: _106.EnumOptions): _106.EnumOptionsAmino;
            fromAminoMsg(object: _106.EnumOptionsAminoMsg): _106.EnumOptions;
            fromProtoMsg(message: _106.EnumOptionsProtoMsg): _106.EnumOptions;
            toProto(message: _106.EnumOptions): Uint8Array;
            toProtoMsg(message: _106.EnumOptions): _106.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            typeUrl: string;
            encode(message: _106.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.EnumValueOptions;
            fromPartial(object: Partial<_106.EnumValueOptions>): _106.EnumValueOptions;
            fromAmino(object: _106.EnumValueOptionsAmino): _106.EnumValueOptions;
            toAmino(message: _106.EnumValueOptions): _106.EnumValueOptionsAmino;
            fromAminoMsg(object: _106.EnumValueOptionsAminoMsg): _106.EnumValueOptions;
            fromProtoMsg(message: _106.EnumValueOptionsProtoMsg): _106.EnumValueOptions;
            toProto(message: _106.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _106.EnumValueOptions): _106.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            typeUrl: string;
            encode(message: _106.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.ServiceOptions;
            fromPartial(object: Partial<_106.ServiceOptions>): _106.ServiceOptions;
            fromAmino(object: _106.ServiceOptionsAmino): _106.ServiceOptions;
            toAmino(message: _106.ServiceOptions): _106.ServiceOptionsAmino;
            fromAminoMsg(object: _106.ServiceOptionsAminoMsg): _106.ServiceOptions;
            fromProtoMsg(message: _106.ServiceOptionsProtoMsg): _106.ServiceOptions;
            toProto(message: _106.ServiceOptions): Uint8Array;
            toProtoMsg(message: _106.ServiceOptions): _106.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            typeUrl: string;
            encode(message: _106.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.MethodOptions;
            fromPartial(object: Partial<_106.MethodOptions>): _106.MethodOptions;
            fromAmino(object: _106.MethodOptionsAmino): _106.MethodOptions;
            toAmino(message: _106.MethodOptions): _106.MethodOptionsAmino;
            fromAminoMsg(object: _106.MethodOptionsAminoMsg): _106.MethodOptions;
            fromProtoMsg(message: _106.MethodOptionsProtoMsg): _106.MethodOptions;
            toProto(message: _106.MethodOptions): Uint8Array;
            toProtoMsg(message: _106.MethodOptions): _106.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            typeUrl: string;
            encode(message: _106.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.UninterpretedOption;
            fromPartial(object: Partial<_106.UninterpretedOption>): _106.UninterpretedOption;
            fromAmino(object: _106.UninterpretedOptionAmino): _106.UninterpretedOption;
            toAmino(message: _106.UninterpretedOption): _106.UninterpretedOptionAmino;
            fromAminoMsg(object: _106.UninterpretedOptionAminoMsg): _106.UninterpretedOption;
            fromProtoMsg(message: _106.UninterpretedOptionProtoMsg): _106.UninterpretedOption;
            toProto(message: _106.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _106.UninterpretedOption): _106.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            typeUrl: string;
            encode(message: _106.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_106.UninterpretedOption_NamePart>): _106.UninterpretedOption_NamePart;
            fromAmino(object: _106.UninterpretedOption_NamePartAmino): _106.UninterpretedOption_NamePart;
            toAmino(message: _106.UninterpretedOption_NamePart): _106.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _106.UninterpretedOption_NamePartAminoMsg): _106.UninterpretedOption_NamePart;
            fromProtoMsg(message: _106.UninterpretedOption_NamePartProtoMsg): _106.UninterpretedOption_NamePart;
            toProto(message: _106.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _106.UninterpretedOption_NamePart): _106.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            typeUrl: string;
            encode(message: _106.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.SourceCodeInfo;
            fromPartial(object: Partial<_106.SourceCodeInfo>): _106.SourceCodeInfo;
            fromAmino(object: _106.SourceCodeInfoAmino): _106.SourceCodeInfo;
            toAmino(message: _106.SourceCodeInfo): _106.SourceCodeInfoAmino;
            fromAminoMsg(object: _106.SourceCodeInfoAminoMsg): _106.SourceCodeInfo;
            fromProtoMsg(message: _106.SourceCodeInfoProtoMsg): _106.SourceCodeInfo;
            toProto(message: _106.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _106.SourceCodeInfo): _106.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            typeUrl: string;
            encode(message: _106.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.SourceCodeInfo_Location;
            fromPartial(object: Partial<_106.SourceCodeInfo_Location>): _106.SourceCodeInfo_Location;
            fromAmino(object: _106.SourceCodeInfo_LocationAmino): _106.SourceCodeInfo_Location;
            toAmino(message: _106.SourceCodeInfo_Location): _106.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _106.SourceCodeInfo_LocationAminoMsg): _106.SourceCodeInfo_Location;
            fromProtoMsg(message: _106.SourceCodeInfo_LocationProtoMsg): _106.SourceCodeInfo_Location;
            toProto(message: _106.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _106.SourceCodeInfo_Location): _106.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            typeUrl: string;
            encode(message: _106.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.GeneratedCodeInfo;
            fromPartial(object: Partial<_106.GeneratedCodeInfo>): _106.GeneratedCodeInfo;
            fromAmino(object: _106.GeneratedCodeInfoAmino): _106.GeneratedCodeInfo;
            toAmino(message: _106.GeneratedCodeInfo): _106.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _106.GeneratedCodeInfoAminoMsg): _106.GeneratedCodeInfo;
            fromProtoMsg(message: _106.GeneratedCodeInfoProtoMsg): _106.GeneratedCodeInfo;
            toProto(message: _106.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _106.GeneratedCodeInfo): _106.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            typeUrl: string;
            encode(message: _106.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _106.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_106.GeneratedCodeInfo_Annotation>): _106.GeneratedCodeInfo_Annotation;
            fromAmino(object: _106.GeneratedCodeInfo_AnnotationAmino): _106.GeneratedCodeInfo_Annotation;
            toAmino(message: _106.GeneratedCodeInfo_Annotation): _106.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _106.GeneratedCodeInfo_AnnotationAminoMsg): _106.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _106.GeneratedCodeInfo_AnnotationProtoMsg): _106.GeneratedCodeInfo_Annotation;
            toProto(message: _106.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _106.GeneratedCodeInfo_Annotation): _106.GeneratedCodeInfo_AnnotationProtoMsg;
        };
        Duration: {
            typeUrl: string;
            encode(message: _105.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _105.Duration;
            fromPartial(object: Partial<_105.Duration>): _105.Duration;
            fromAmino(object: string): _105.Duration;
            toAmino(message: _105.Duration): string;
            fromAminoMsg(object: _105.DurationAminoMsg): _105.Duration;
            fromProtoMsg(message: _105.DurationProtoMsg): _105.Duration;
            toProto(message: _105.Duration): Uint8Array;
            toProtoMsg(message: _105.Duration): _105.DurationProtoMsg;
        };
        Timestamp: {
            typeUrl: string;
            encode(message: _104.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _104.Timestamp;
            fromPartial(object: Partial<_104.Timestamp>): _104.Timestamp;
            fromAmino(object: string): _104.Timestamp;
            toAmino(message: _104.Timestamp): string;
            fromAminoMsg(object: _104.TimestampAminoMsg): _104.Timestamp;
            fromProtoMsg(message: _104.TimestampProtoMsg): _104.Timestamp;
            toProto(message: _104.Timestamp): Uint8Array;
            toProtoMsg(message: _104.Timestamp): _104.TimestampProtoMsg;
        };
        Any: {
            typeUrl: string;
            encode(message: _103.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _103.Any;
            fromPartial(object: Partial<_103.Any>): _103.Any;
            fromAmino(object: _103.AnyAmino): _103.Any;
            toAmino(message: _103.Any): _103.AnyAmino;
            fromAminoMsg(object: _103.AnyAminoMsg): _103.Any;
            fromProtoMsg(message: _103.AnyProtoMsg): _103.Any;
            toProto(message: _103.Any): Uint8Array;
            toProtoMsg(message: _103.Any): _103.AnyProtoMsg;
        };
    };
}
