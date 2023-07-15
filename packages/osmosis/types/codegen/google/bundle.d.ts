import * as _222 from "./protobuf/descriptor";
import * as _223 from "./protobuf/any";
import * as _224 from "./protobuf/timestamp";
import * as _225 from "./protobuf/duration";
export declare namespace google {
    const api: {};
    const protobuf: {
        Duration: {
            encode(message: _225.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _225.Duration;
            fromPartial(object: Partial<_225.Duration>): _225.Duration;
        };
        Timestamp: {
            encode(message: _224.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _224.Timestamp;
            fromPartial(object: Partial<_224.Timestamp>): _224.Timestamp;
        };
        Any: {
            encode(message: _223.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _223.Any;
            fromPartial(object: Partial<_223.Any>): _223.Any;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _222.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _222.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _222.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _222.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _222.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _222.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _222.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _222.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _222.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _222.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _222.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _222.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _222.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _222.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _222.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _222.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _222.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _222.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _222.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _222.FieldOptions_CType;
        FieldOptions_JSType: typeof _222.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _222.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _222.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _222.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _222.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.FileDescriptorSet;
            fromPartial(object: Partial<_222.FileDescriptorSet>): _222.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _222.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.FileDescriptorProto;
            fromPartial(object: Partial<_222.FileDescriptorProto>): _222.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _222.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.DescriptorProto;
            fromPartial(object: Partial<_222.DescriptorProto>): _222.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _222.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_222.DescriptorProto_ExtensionRange>): _222.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _222.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_222.DescriptorProto_ReservedRange>): _222.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _222.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.ExtensionRangeOptions;
            fromPartial(object: Partial<_222.ExtensionRangeOptions>): _222.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _222.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.FieldDescriptorProto;
            fromPartial(object: Partial<_222.FieldDescriptorProto>): _222.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _222.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.OneofDescriptorProto;
            fromPartial(object: Partial<_222.OneofDescriptorProto>): _222.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _222.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.EnumDescriptorProto;
            fromPartial(object: Partial<_222.EnumDescriptorProto>): _222.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _222.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_222.EnumDescriptorProto_EnumReservedRange>): _222.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _222.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.EnumValueDescriptorProto;
            fromPartial(object: Partial<_222.EnumValueDescriptorProto>): _222.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _222.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.ServiceDescriptorProto;
            fromPartial(object: Partial<_222.ServiceDescriptorProto>): _222.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _222.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.MethodDescriptorProto;
            fromPartial(object: Partial<_222.MethodDescriptorProto>): _222.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _222.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.FileOptions;
            fromPartial(object: Partial<_222.FileOptions>): _222.FileOptions;
        };
        MessageOptions: {
            encode(message: _222.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.MessageOptions;
            fromPartial(object: Partial<_222.MessageOptions>): _222.MessageOptions;
        };
        FieldOptions: {
            encode(message: _222.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.FieldOptions;
            fromPartial(object: Partial<_222.FieldOptions>): _222.FieldOptions;
        };
        OneofOptions: {
            encode(message: _222.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.OneofOptions;
            fromPartial(object: Partial<_222.OneofOptions>): _222.OneofOptions;
        };
        EnumOptions: {
            encode(message: _222.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.EnumOptions;
            fromPartial(object: Partial<_222.EnumOptions>): _222.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _222.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.EnumValueOptions;
            fromPartial(object: Partial<_222.EnumValueOptions>): _222.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _222.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.ServiceOptions;
            fromPartial(object: Partial<_222.ServiceOptions>): _222.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _222.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.MethodOptions;
            fromPartial(object: Partial<_222.MethodOptions>): _222.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _222.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.UninterpretedOption;
            fromPartial(object: Partial<_222.UninterpretedOption>): _222.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _222.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_222.UninterpretedOption_NamePart>): _222.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _222.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.SourceCodeInfo;
            fromPartial(object: Partial<_222.SourceCodeInfo>): _222.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _222.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.SourceCodeInfo_Location;
            fromPartial(object: Partial<_222.SourceCodeInfo_Location>): _222.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _222.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.GeneratedCodeInfo;
            fromPartial(object: Partial<_222.GeneratedCodeInfo>): _222.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _222.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _222.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_222.GeneratedCodeInfo_Annotation>): _222.GeneratedCodeInfo_Annotation;
        };
    };
}
