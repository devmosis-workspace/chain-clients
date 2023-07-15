import * as _99 from "./protobuf/any";
import * as _100 from "./protobuf/timestamp";
import * as _101 from "./protobuf/duration";
import * as _102 from "./protobuf/descriptor";
export declare namespace google {
    const api: {};
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _102.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _102.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _102.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _102.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _102.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _102.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _102.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _102.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _102.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _102.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _102.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _102.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _102.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _102.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _102.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _102.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _102.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _102.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _102.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _102.FieldOptions_CType;
        FieldOptions_JSType: typeof _102.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _102.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _102.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _102.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _102.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.FileDescriptorSet;
            fromPartial(object: Partial<_102.FileDescriptorSet>): _102.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _102.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.FileDescriptorProto;
            fromPartial(object: Partial<_102.FileDescriptorProto>): _102.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _102.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.DescriptorProto;
            fromPartial(object: Partial<_102.DescriptorProto>): _102.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _102.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_102.DescriptorProto_ExtensionRange>): _102.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _102.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_102.DescriptorProto_ReservedRange>): _102.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _102.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.ExtensionRangeOptions;
            fromPartial(object: Partial<_102.ExtensionRangeOptions>): _102.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _102.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.FieldDescriptorProto;
            fromPartial(object: Partial<_102.FieldDescriptorProto>): _102.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _102.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.OneofDescriptorProto;
            fromPartial(object: Partial<_102.OneofDescriptorProto>): _102.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _102.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.EnumDescriptorProto;
            fromPartial(object: Partial<_102.EnumDescriptorProto>): _102.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _102.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_102.EnumDescriptorProto_EnumReservedRange>): _102.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _102.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.EnumValueDescriptorProto;
            fromPartial(object: Partial<_102.EnumValueDescriptorProto>): _102.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _102.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.ServiceDescriptorProto;
            fromPartial(object: Partial<_102.ServiceDescriptorProto>): _102.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _102.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.MethodDescriptorProto;
            fromPartial(object: Partial<_102.MethodDescriptorProto>): _102.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _102.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.FileOptions;
            fromPartial(object: Partial<_102.FileOptions>): _102.FileOptions;
        };
        MessageOptions: {
            encode(message: _102.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.MessageOptions;
            fromPartial(object: Partial<_102.MessageOptions>): _102.MessageOptions;
        };
        FieldOptions: {
            encode(message: _102.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.FieldOptions;
            fromPartial(object: Partial<_102.FieldOptions>): _102.FieldOptions;
        };
        OneofOptions: {
            encode(message: _102.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.OneofOptions;
            fromPartial(object: Partial<_102.OneofOptions>): _102.OneofOptions;
        };
        EnumOptions: {
            encode(message: _102.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.EnumOptions;
            fromPartial(object: Partial<_102.EnumOptions>): _102.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _102.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.EnumValueOptions;
            fromPartial(object: Partial<_102.EnumValueOptions>): _102.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _102.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.ServiceOptions;
            fromPartial(object: Partial<_102.ServiceOptions>): _102.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _102.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.MethodOptions;
            fromPartial(object: Partial<_102.MethodOptions>): _102.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _102.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.UninterpretedOption;
            fromPartial(object: Partial<_102.UninterpretedOption>): _102.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _102.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_102.UninterpretedOption_NamePart>): _102.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _102.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.SourceCodeInfo;
            fromPartial(object: Partial<_102.SourceCodeInfo>): _102.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _102.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.SourceCodeInfo_Location;
            fromPartial(object: Partial<_102.SourceCodeInfo_Location>): _102.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _102.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.GeneratedCodeInfo;
            fromPartial(object: Partial<_102.GeneratedCodeInfo>): _102.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _102.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _102.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_102.GeneratedCodeInfo_Annotation>): _102.GeneratedCodeInfo_Annotation;
        };
        Duration: {
            encode(message: _101.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.Duration;
            fromPartial(object: Partial<_101.Duration>): _101.Duration;
        };
        Timestamp: {
            encode(message: _100.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.Timestamp;
            fromPartial(object: Partial<_100.Timestamp>): _100.Timestamp;
        };
        Any: {
            encode(message: _99.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.Any;
            fromPartial(object: Partial<_99.Any>): _99.Any;
        };
    };
}
