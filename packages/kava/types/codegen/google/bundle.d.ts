import * as _174 from "./protobuf/timestamp";
import * as _175 from "./protobuf/any";
import * as _176 from "./protobuf/duration";
import * as _177 from "./protobuf/descriptor";
export declare namespace google {
    const api: {};
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _177.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _177.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _177.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _177.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _177.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _177.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _177.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _177.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _177.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _177.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _177.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _177.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _177.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _177.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _177.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _177.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _177.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _177.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _177.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _177.FieldOptions_CType;
        FieldOptions_JSType: typeof _177.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _177.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _177.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _177.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _177.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.FileDescriptorSet;
            fromPartial(object: Partial<_177.FileDescriptorSet>): _177.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _177.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.FileDescriptorProto;
            fromPartial(object: Partial<_177.FileDescriptorProto>): _177.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _177.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.DescriptorProto;
            fromPartial(object: Partial<_177.DescriptorProto>): _177.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _177.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_177.DescriptorProto_ExtensionRange>): _177.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _177.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_177.DescriptorProto_ReservedRange>): _177.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _177.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.ExtensionRangeOptions;
            fromPartial(object: Partial<_177.ExtensionRangeOptions>): _177.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _177.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.FieldDescriptorProto;
            fromPartial(object: Partial<_177.FieldDescriptorProto>): _177.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _177.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.OneofDescriptorProto;
            fromPartial(object: Partial<_177.OneofDescriptorProto>): _177.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _177.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.EnumDescriptorProto;
            fromPartial(object: Partial<_177.EnumDescriptorProto>): _177.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _177.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_177.EnumDescriptorProto_EnumReservedRange>): _177.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _177.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.EnumValueDescriptorProto;
            fromPartial(object: Partial<_177.EnumValueDescriptorProto>): _177.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _177.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.ServiceDescriptorProto;
            fromPartial(object: Partial<_177.ServiceDescriptorProto>): _177.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _177.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.MethodDescriptorProto;
            fromPartial(object: Partial<_177.MethodDescriptorProto>): _177.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _177.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.FileOptions;
            fromPartial(object: Partial<_177.FileOptions>): _177.FileOptions;
        };
        MessageOptions: {
            encode(message: _177.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.MessageOptions;
            fromPartial(object: Partial<_177.MessageOptions>): _177.MessageOptions;
        };
        FieldOptions: {
            encode(message: _177.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.FieldOptions;
            fromPartial(object: Partial<_177.FieldOptions>): _177.FieldOptions;
        };
        OneofOptions: {
            encode(message: _177.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.OneofOptions;
            fromPartial(object: Partial<_177.OneofOptions>): _177.OneofOptions;
        };
        EnumOptions: {
            encode(message: _177.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.EnumOptions;
            fromPartial(object: Partial<_177.EnumOptions>): _177.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _177.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.EnumValueOptions;
            fromPartial(object: Partial<_177.EnumValueOptions>): _177.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _177.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.ServiceOptions;
            fromPartial(object: Partial<_177.ServiceOptions>): _177.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _177.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.MethodOptions;
            fromPartial(object: Partial<_177.MethodOptions>): _177.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _177.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.UninterpretedOption;
            fromPartial(object: Partial<_177.UninterpretedOption>): _177.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _177.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_177.UninterpretedOption_NamePart>): _177.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _177.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.SourceCodeInfo;
            fromPartial(object: Partial<_177.SourceCodeInfo>): _177.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _177.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.SourceCodeInfo_Location;
            fromPartial(object: Partial<_177.SourceCodeInfo_Location>): _177.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _177.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.GeneratedCodeInfo;
            fromPartial(object: Partial<_177.GeneratedCodeInfo>): _177.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _177.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _177.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_177.GeneratedCodeInfo_Annotation>): _177.GeneratedCodeInfo_Annotation;
        };
        Duration: {
            encode(message: _176.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _176.Duration;
            fromPartial(object: Partial<_176.Duration>): _176.Duration;
        };
        Any: {
            encode(message: _175.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _175.Any;
            fromPartial(object: Partial<_175.Any>): _175.Any;
        };
        Timestamp: {
            encode(message: _174.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _174.Timestamp;
            fromPartial(object: Partial<_174.Timestamp>): _174.Timestamp;
        };
    };
}
