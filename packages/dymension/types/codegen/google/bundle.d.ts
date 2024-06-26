import * as _137 from "./api/http";
import * as _138 from "./protobuf/any";
import * as _139 from "./protobuf/duration";
import * as _140 from "./protobuf/timestamp";
import * as _141 from "./protobuf/descriptor";
export declare namespace google {
    const api: {
        Http: {
            typeUrl: string;
            encode(message: _137.Http, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _137.Http;
            fromPartial(object: Partial<_137.Http>): _137.Http;
            fromAmino(object: _137.HttpAmino): _137.Http;
            toAmino(message: _137.Http): _137.HttpAmino;
            fromAminoMsg(object: _137.HttpAminoMsg): _137.Http;
            fromProtoMsg(message: _137.HttpProtoMsg): _137.Http;
            toProto(message: _137.Http): Uint8Array;
            toProtoMsg(message: _137.Http): _137.HttpProtoMsg;
        };
        HttpRule: {
            typeUrl: string;
            encode(message: _137.HttpRule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _137.HttpRule;
            fromPartial(object: Partial<_137.HttpRule>): _137.HttpRule;
            fromAmino(object: _137.HttpRuleAmino): _137.HttpRule;
            toAmino(message: _137.HttpRule): _137.HttpRuleAmino;
            fromAminoMsg(object: _137.HttpRuleAminoMsg): _137.HttpRule;
            fromProtoMsg(message: _137.HttpRuleProtoMsg): _137.HttpRule;
            toProto(message: _137.HttpRule): Uint8Array;
            toProtoMsg(message: _137.HttpRule): _137.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            typeUrl: string;
            encode(message: _137.CustomHttpPattern, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _137.CustomHttpPattern;
            fromPartial(object: Partial<_137.CustomHttpPattern>): _137.CustomHttpPattern;
            fromAmino(object: _137.CustomHttpPatternAmino): _137.CustomHttpPattern;
            toAmino(message: _137.CustomHttpPattern): _137.CustomHttpPatternAmino;
            fromAminoMsg(object: _137.CustomHttpPatternAminoMsg): _137.CustomHttpPattern;
            fromProtoMsg(message: _137.CustomHttpPatternProtoMsg): _137.CustomHttpPattern;
            toProto(message: _137.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _137.CustomHttpPattern): _137.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _141.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _141.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _141.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _141.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _141.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _141.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _141.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _141.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _141.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _141.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _141.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _141.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _141.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _141.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _141.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _141.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _141.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _141.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _141.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _141.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _141.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _141.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _141.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _141.FieldOptions_CType;
        FieldOptions_JSType: typeof _141.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _141.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _141.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _141.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _141.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _141.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            typeUrl: string;
            encode(message: _141.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.FileDescriptorSet;
            fromPartial(object: Partial<_141.FileDescriptorSet>): _141.FileDescriptorSet;
            fromAmino(object: _141.FileDescriptorSetAmino): _141.FileDescriptorSet;
            toAmino(message: _141.FileDescriptorSet): _141.FileDescriptorSetAmino;
            fromAminoMsg(object: _141.FileDescriptorSetAminoMsg): _141.FileDescriptorSet;
            fromProtoMsg(message: _141.FileDescriptorSetProtoMsg): _141.FileDescriptorSet;
            toProto(message: _141.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _141.FileDescriptorSet): _141.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            typeUrl: string;
            encode(message: _141.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.FileDescriptorProto;
            fromPartial(object: Partial<_141.FileDescriptorProto>): _141.FileDescriptorProto;
            fromAmino(object: _141.FileDescriptorProtoAmino): _141.FileDescriptorProto;
            toAmino(message: _141.FileDescriptorProto): _141.FileDescriptorProtoAmino;
            fromAminoMsg(object: _141.FileDescriptorProtoAminoMsg): _141.FileDescriptorProto;
            fromProtoMsg(message: _141.FileDescriptorProtoProtoMsg): _141.FileDescriptorProto;
            toProto(message: _141.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _141.FileDescriptorProto): _141.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            typeUrl: string;
            encode(message: _141.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.DescriptorProto;
            fromPartial(object: Partial<_141.DescriptorProto>): _141.DescriptorProto;
            fromAmino(object: _141.DescriptorProtoAmino): _141.DescriptorProto;
            toAmino(message: _141.DescriptorProto): _141.DescriptorProtoAmino;
            fromAminoMsg(object: _141.DescriptorProtoAminoMsg): _141.DescriptorProto;
            fromProtoMsg(message: _141.DescriptorProtoProtoMsg): _141.DescriptorProto;
            toProto(message: _141.DescriptorProto): Uint8Array;
            toProtoMsg(message: _141.DescriptorProto): _141.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            typeUrl: string;
            encode(message: _141.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_141.DescriptorProto_ExtensionRange>): _141.DescriptorProto_ExtensionRange;
            fromAmino(object: _141.DescriptorProto_ExtensionRangeAmino): _141.DescriptorProto_ExtensionRange;
            toAmino(message: _141.DescriptorProto_ExtensionRange): _141.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _141.DescriptorProto_ExtensionRangeAminoMsg): _141.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _141.DescriptorProto_ExtensionRangeProtoMsg): _141.DescriptorProto_ExtensionRange;
            toProto(message: _141.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _141.DescriptorProto_ExtensionRange): _141.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            typeUrl: string;
            encode(message: _141.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_141.DescriptorProto_ReservedRange>): _141.DescriptorProto_ReservedRange;
            fromAmino(object: _141.DescriptorProto_ReservedRangeAmino): _141.DescriptorProto_ReservedRange;
            toAmino(message: _141.DescriptorProto_ReservedRange): _141.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _141.DescriptorProto_ReservedRangeAminoMsg): _141.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _141.DescriptorProto_ReservedRangeProtoMsg): _141.DescriptorProto_ReservedRange;
            toProto(message: _141.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _141.DescriptorProto_ReservedRange): _141.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            typeUrl: string;
            encode(message: _141.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.ExtensionRangeOptions;
            fromPartial(object: Partial<_141.ExtensionRangeOptions>): _141.ExtensionRangeOptions;
            fromAmino(object: _141.ExtensionRangeOptionsAmino): _141.ExtensionRangeOptions;
            toAmino(message: _141.ExtensionRangeOptions): _141.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _141.ExtensionRangeOptionsAminoMsg): _141.ExtensionRangeOptions;
            fromProtoMsg(message: _141.ExtensionRangeOptionsProtoMsg): _141.ExtensionRangeOptions;
            toProto(message: _141.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _141.ExtensionRangeOptions): _141.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            typeUrl: string;
            encode(message: _141.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.FieldDescriptorProto;
            fromPartial(object: Partial<_141.FieldDescriptorProto>): _141.FieldDescriptorProto;
            fromAmino(object: _141.FieldDescriptorProtoAmino): _141.FieldDescriptorProto;
            toAmino(message: _141.FieldDescriptorProto): _141.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _141.FieldDescriptorProtoAminoMsg): _141.FieldDescriptorProto;
            fromProtoMsg(message: _141.FieldDescriptorProtoProtoMsg): _141.FieldDescriptorProto;
            toProto(message: _141.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _141.FieldDescriptorProto): _141.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            typeUrl: string;
            encode(message: _141.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.OneofDescriptorProto;
            fromPartial(object: Partial<_141.OneofDescriptorProto>): _141.OneofDescriptorProto;
            fromAmino(object: _141.OneofDescriptorProtoAmino): _141.OneofDescriptorProto;
            toAmino(message: _141.OneofDescriptorProto): _141.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _141.OneofDescriptorProtoAminoMsg): _141.OneofDescriptorProto;
            fromProtoMsg(message: _141.OneofDescriptorProtoProtoMsg): _141.OneofDescriptorProto;
            toProto(message: _141.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _141.OneofDescriptorProto): _141.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            typeUrl: string;
            encode(message: _141.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.EnumDescriptorProto;
            fromPartial(object: Partial<_141.EnumDescriptorProto>): _141.EnumDescriptorProto;
            fromAmino(object: _141.EnumDescriptorProtoAmino): _141.EnumDescriptorProto;
            toAmino(message: _141.EnumDescriptorProto): _141.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _141.EnumDescriptorProtoAminoMsg): _141.EnumDescriptorProto;
            fromProtoMsg(message: _141.EnumDescriptorProtoProtoMsg): _141.EnumDescriptorProto;
            toProto(message: _141.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _141.EnumDescriptorProto): _141.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            typeUrl: string;
            encode(message: _141.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_141.EnumDescriptorProto_EnumReservedRange>): _141.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _141.EnumDescriptorProto_EnumReservedRangeAmino): _141.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _141.EnumDescriptorProto_EnumReservedRange): _141.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _141.EnumDescriptorProto_EnumReservedRangeAminoMsg): _141.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _141.EnumDescriptorProto_EnumReservedRangeProtoMsg): _141.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _141.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _141.EnumDescriptorProto_EnumReservedRange): _141.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            typeUrl: string;
            encode(message: _141.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.EnumValueDescriptorProto;
            fromPartial(object: Partial<_141.EnumValueDescriptorProto>): _141.EnumValueDescriptorProto;
            fromAmino(object: _141.EnumValueDescriptorProtoAmino): _141.EnumValueDescriptorProto;
            toAmino(message: _141.EnumValueDescriptorProto): _141.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _141.EnumValueDescriptorProtoAminoMsg): _141.EnumValueDescriptorProto;
            fromProtoMsg(message: _141.EnumValueDescriptorProtoProtoMsg): _141.EnumValueDescriptorProto;
            toProto(message: _141.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _141.EnumValueDescriptorProto): _141.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            typeUrl: string;
            encode(message: _141.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.ServiceDescriptorProto;
            fromPartial(object: Partial<_141.ServiceDescriptorProto>): _141.ServiceDescriptorProto;
            fromAmino(object: _141.ServiceDescriptorProtoAmino): _141.ServiceDescriptorProto;
            toAmino(message: _141.ServiceDescriptorProto): _141.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _141.ServiceDescriptorProtoAminoMsg): _141.ServiceDescriptorProto;
            fromProtoMsg(message: _141.ServiceDescriptorProtoProtoMsg): _141.ServiceDescriptorProto;
            toProto(message: _141.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _141.ServiceDescriptorProto): _141.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            typeUrl: string;
            encode(message: _141.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.MethodDescriptorProto;
            fromPartial(object: Partial<_141.MethodDescriptorProto>): _141.MethodDescriptorProto;
            fromAmino(object: _141.MethodDescriptorProtoAmino): _141.MethodDescriptorProto;
            toAmino(message: _141.MethodDescriptorProto): _141.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _141.MethodDescriptorProtoAminoMsg): _141.MethodDescriptorProto;
            fromProtoMsg(message: _141.MethodDescriptorProtoProtoMsg): _141.MethodDescriptorProto;
            toProto(message: _141.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _141.MethodDescriptorProto): _141.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            typeUrl: string;
            encode(message: _141.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.FileOptions;
            fromPartial(object: Partial<_141.FileOptions>): _141.FileOptions;
            fromAmino(object: _141.FileOptionsAmino): _141.FileOptions;
            toAmino(message: _141.FileOptions): _141.FileOptionsAmino;
            fromAminoMsg(object: _141.FileOptionsAminoMsg): _141.FileOptions;
            fromProtoMsg(message: _141.FileOptionsProtoMsg): _141.FileOptions;
            toProto(message: _141.FileOptions): Uint8Array;
            toProtoMsg(message: _141.FileOptions): _141.FileOptionsProtoMsg;
        };
        MessageOptions: {
            typeUrl: string;
            encode(message: _141.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.MessageOptions;
            fromPartial(object: Partial<_141.MessageOptions>): _141.MessageOptions;
            fromAmino(object: _141.MessageOptionsAmino): _141.MessageOptions;
            toAmino(message: _141.MessageOptions): _141.MessageOptionsAmino;
            fromAminoMsg(object: _141.MessageOptionsAminoMsg): _141.MessageOptions;
            fromProtoMsg(message: _141.MessageOptionsProtoMsg): _141.MessageOptions;
            toProto(message: _141.MessageOptions): Uint8Array;
            toProtoMsg(message: _141.MessageOptions): _141.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            typeUrl: string;
            encode(message: _141.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.FieldOptions;
            fromPartial(object: Partial<_141.FieldOptions>): _141.FieldOptions;
            fromAmino(object: _141.FieldOptionsAmino): _141.FieldOptions;
            toAmino(message: _141.FieldOptions): _141.FieldOptionsAmino;
            fromAminoMsg(object: _141.FieldOptionsAminoMsg): _141.FieldOptions;
            fromProtoMsg(message: _141.FieldOptionsProtoMsg): _141.FieldOptions;
            toProto(message: _141.FieldOptions): Uint8Array;
            toProtoMsg(message: _141.FieldOptions): _141.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            typeUrl: string;
            encode(message: _141.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.OneofOptions;
            fromPartial(object: Partial<_141.OneofOptions>): _141.OneofOptions;
            fromAmino(object: _141.OneofOptionsAmino): _141.OneofOptions;
            toAmino(message: _141.OneofOptions): _141.OneofOptionsAmino;
            fromAminoMsg(object: _141.OneofOptionsAminoMsg): _141.OneofOptions;
            fromProtoMsg(message: _141.OneofOptionsProtoMsg): _141.OneofOptions;
            toProto(message: _141.OneofOptions): Uint8Array;
            toProtoMsg(message: _141.OneofOptions): _141.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            typeUrl: string;
            encode(message: _141.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.EnumOptions;
            fromPartial(object: Partial<_141.EnumOptions>): _141.EnumOptions;
            fromAmino(object: _141.EnumOptionsAmino): _141.EnumOptions;
            toAmino(message: _141.EnumOptions): _141.EnumOptionsAmino;
            fromAminoMsg(object: _141.EnumOptionsAminoMsg): _141.EnumOptions;
            fromProtoMsg(message: _141.EnumOptionsProtoMsg): _141.EnumOptions;
            toProto(message: _141.EnumOptions): Uint8Array;
            toProtoMsg(message: _141.EnumOptions): _141.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            typeUrl: string;
            encode(message: _141.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.EnumValueOptions;
            fromPartial(object: Partial<_141.EnumValueOptions>): _141.EnumValueOptions;
            fromAmino(object: _141.EnumValueOptionsAmino): _141.EnumValueOptions;
            toAmino(message: _141.EnumValueOptions): _141.EnumValueOptionsAmino;
            fromAminoMsg(object: _141.EnumValueOptionsAminoMsg): _141.EnumValueOptions;
            fromProtoMsg(message: _141.EnumValueOptionsProtoMsg): _141.EnumValueOptions;
            toProto(message: _141.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _141.EnumValueOptions): _141.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            typeUrl: string;
            encode(message: _141.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.ServiceOptions;
            fromPartial(object: Partial<_141.ServiceOptions>): _141.ServiceOptions;
            fromAmino(object: _141.ServiceOptionsAmino): _141.ServiceOptions;
            toAmino(message: _141.ServiceOptions): _141.ServiceOptionsAmino;
            fromAminoMsg(object: _141.ServiceOptionsAminoMsg): _141.ServiceOptions;
            fromProtoMsg(message: _141.ServiceOptionsProtoMsg): _141.ServiceOptions;
            toProto(message: _141.ServiceOptions): Uint8Array;
            toProtoMsg(message: _141.ServiceOptions): _141.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            typeUrl: string;
            encode(message: _141.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.MethodOptions;
            fromPartial(object: Partial<_141.MethodOptions>): _141.MethodOptions;
            fromAmino(object: _141.MethodOptionsAmino): _141.MethodOptions;
            toAmino(message: _141.MethodOptions): _141.MethodOptionsAmino;
            fromAminoMsg(object: _141.MethodOptionsAminoMsg): _141.MethodOptions;
            fromProtoMsg(message: _141.MethodOptionsProtoMsg): _141.MethodOptions;
            toProto(message: _141.MethodOptions): Uint8Array;
            toProtoMsg(message: _141.MethodOptions): _141.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            typeUrl: string;
            encode(message: _141.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.UninterpretedOption;
            fromPartial(object: Partial<_141.UninterpretedOption>): _141.UninterpretedOption;
            fromAmino(object: _141.UninterpretedOptionAmino): _141.UninterpretedOption;
            toAmino(message: _141.UninterpretedOption): _141.UninterpretedOptionAmino;
            fromAminoMsg(object: _141.UninterpretedOptionAminoMsg): _141.UninterpretedOption;
            fromProtoMsg(message: _141.UninterpretedOptionProtoMsg): _141.UninterpretedOption;
            toProto(message: _141.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _141.UninterpretedOption): _141.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            typeUrl: string;
            encode(message: _141.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_141.UninterpretedOption_NamePart>): _141.UninterpretedOption_NamePart;
            fromAmino(object: _141.UninterpretedOption_NamePartAmino): _141.UninterpretedOption_NamePart;
            toAmino(message: _141.UninterpretedOption_NamePart): _141.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _141.UninterpretedOption_NamePartAminoMsg): _141.UninterpretedOption_NamePart;
            fromProtoMsg(message: _141.UninterpretedOption_NamePartProtoMsg): _141.UninterpretedOption_NamePart;
            toProto(message: _141.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _141.UninterpretedOption_NamePart): _141.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            typeUrl: string;
            encode(message: _141.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.SourceCodeInfo;
            fromPartial(object: Partial<_141.SourceCodeInfo>): _141.SourceCodeInfo;
            fromAmino(object: _141.SourceCodeInfoAmino): _141.SourceCodeInfo;
            toAmino(message: _141.SourceCodeInfo): _141.SourceCodeInfoAmino;
            fromAminoMsg(object: _141.SourceCodeInfoAminoMsg): _141.SourceCodeInfo;
            fromProtoMsg(message: _141.SourceCodeInfoProtoMsg): _141.SourceCodeInfo;
            toProto(message: _141.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _141.SourceCodeInfo): _141.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            typeUrl: string;
            encode(message: _141.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.SourceCodeInfo_Location;
            fromPartial(object: Partial<_141.SourceCodeInfo_Location>): _141.SourceCodeInfo_Location;
            fromAmino(object: _141.SourceCodeInfo_LocationAmino): _141.SourceCodeInfo_Location;
            toAmino(message: _141.SourceCodeInfo_Location): _141.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _141.SourceCodeInfo_LocationAminoMsg): _141.SourceCodeInfo_Location;
            fromProtoMsg(message: _141.SourceCodeInfo_LocationProtoMsg): _141.SourceCodeInfo_Location;
            toProto(message: _141.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _141.SourceCodeInfo_Location): _141.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            typeUrl: string;
            encode(message: _141.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.GeneratedCodeInfo;
            fromPartial(object: Partial<_141.GeneratedCodeInfo>): _141.GeneratedCodeInfo;
            fromAmino(object: _141.GeneratedCodeInfoAmino): _141.GeneratedCodeInfo;
            toAmino(message: _141.GeneratedCodeInfo): _141.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _141.GeneratedCodeInfoAminoMsg): _141.GeneratedCodeInfo;
            fromProtoMsg(message: _141.GeneratedCodeInfoProtoMsg): _141.GeneratedCodeInfo;
            toProto(message: _141.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _141.GeneratedCodeInfo): _141.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            typeUrl: string;
            encode(message: _141.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _141.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_141.GeneratedCodeInfo_Annotation>): _141.GeneratedCodeInfo_Annotation;
            fromAmino(object: _141.GeneratedCodeInfo_AnnotationAmino): _141.GeneratedCodeInfo_Annotation;
            toAmino(message: _141.GeneratedCodeInfo_Annotation): _141.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _141.GeneratedCodeInfo_AnnotationAminoMsg): _141.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _141.GeneratedCodeInfo_AnnotationProtoMsg): _141.GeneratedCodeInfo_Annotation;
            toProto(message: _141.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _141.GeneratedCodeInfo_Annotation): _141.GeneratedCodeInfo_AnnotationProtoMsg;
        };
        Timestamp: {
            typeUrl: string;
            encode(message: _140.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _140.Timestamp;
            fromPartial(object: Partial<_140.Timestamp>): _140.Timestamp;
            fromAmino(object: string): _140.Timestamp;
            toAmino(message: _140.Timestamp): string;
            fromAminoMsg(object: _140.TimestampAminoMsg): _140.Timestamp;
            fromProtoMsg(message: _140.TimestampProtoMsg): _140.Timestamp;
            toProto(message: _140.Timestamp): Uint8Array;
            toProtoMsg(message: _140.Timestamp): _140.TimestampProtoMsg;
        };
        Duration: {
            typeUrl: string;
            encode(message: _139.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _139.Duration;
            fromPartial(object: Partial<_139.Duration>): _139.Duration;
            fromAmino(object: string): _139.Duration;
            toAmino(message: _139.Duration): string;
            fromAminoMsg(object: _139.DurationAminoMsg): _139.Duration;
            fromProtoMsg(message: _139.DurationProtoMsg): _139.Duration;
            toProto(message: _139.Duration): Uint8Array;
            toProtoMsg(message: _139.Duration): _139.DurationProtoMsg;
        };
        Any: {
            typeUrl: string;
            encode(message: _138.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _138.Any;
            fromPartial(object: Partial<_138.Any>): _138.Any;
            fromAmino(object: _138.AnyAmino): _138.Any;
            toAmino(message: _138.Any): _138.AnyAmino;
            fromAminoMsg(object: _138.AnyAminoMsg): _138.Any;
            fromProtoMsg(message: _138.AnyProtoMsg): _138.Any;
            toProto(message: _138.Any): Uint8Array;
            toProtoMsg(message: _138.Any): _138.AnyProtoMsg;
        };
    };
}
