import * as _121 from "./protobuf/duration";
import * as _122 from "./protobuf/timestamp";
import * as _123 from "./protobuf/any";
import * as _124 from "./protobuf/descriptor";
export declare namespace google {
    const api: {};
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _124.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _124.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _124.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _124.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _124.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _124.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _124.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _124.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _124.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _124.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _124.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _124.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _124.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _124.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _124.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _124.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _124.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _124.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _124.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _124.FieldOptions_CType;
        FieldOptions_JSType: typeof _124.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _124.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _124.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _124.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _124.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.FileDescriptorSet;
            fromPartial(object: Partial<_124.FileDescriptorSet>): _124.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _124.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.FileDescriptorProto;
            fromPartial(object: Partial<_124.FileDescriptorProto>): _124.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _124.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.DescriptorProto;
            fromPartial(object: Partial<_124.DescriptorProto>): _124.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _124.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_124.DescriptorProto_ExtensionRange>): _124.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _124.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_124.DescriptorProto_ReservedRange>): _124.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _124.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.ExtensionRangeOptions;
            fromPartial(object: Partial<_124.ExtensionRangeOptions>): _124.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _124.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.FieldDescriptorProto;
            fromPartial(object: Partial<_124.FieldDescriptorProto>): _124.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _124.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.OneofDescriptorProto;
            fromPartial(object: Partial<_124.OneofDescriptorProto>): _124.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _124.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.EnumDescriptorProto;
            fromPartial(object: Partial<_124.EnumDescriptorProto>): _124.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _124.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_124.EnumDescriptorProto_EnumReservedRange>): _124.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _124.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.EnumValueDescriptorProto;
            fromPartial(object: Partial<_124.EnumValueDescriptorProto>): _124.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _124.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.ServiceDescriptorProto;
            fromPartial(object: Partial<_124.ServiceDescriptorProto>): _124.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _124.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.MethodDescriptorProto;
            fromPartial(object: Partial<_124.MethodDescriptorProto>): _124.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _124.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.FileOptions;
            fromPartial(object: Partial<_124.FileOptions>): _124.FileOptions;
        };
        MessageOptions: {
            encode(message: _124.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.MessageOptions;
            fromPartial(object: Partial<_124.MessageOptions>): _124.MessageOptions;
        };
        FieldOptions: {
            encode(message: _124.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.FieldOptions;
            fromPartial(object: Partial<_124.FieldOptions>): _124.FieldOptions;
        };
        OneofOptions: {
            encode(message: _124.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.OneofOptions;
            fromPartial(object: Partial<_124.OneofOptions>): _124.OneofOptions;
        };
        EnumOptions: {
            encode(message: _124.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.EnumOptions;
            fromPartial(object: Partial<_124.EnumOptions>): _124.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _124.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.EnumValueOptions;
            fromPartial(object: Partial<_124.EnumValueOptions>): _124.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _124.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.ServiceOptions;
            fromPartial(object: Partial<_124.ServiceOptions>): _124.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _124.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.MethodOptions;
            fromPartial(object: Partial<_124.MethodOptions>): _124.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _124.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.UninterpretedOption;
            fromPartial(object: Partial<_124.UninterpretedOption>): _124.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _124.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_124.UninterpretedOption_NamePart>): _124.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _124.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.SourceCodeInfo;
            fromPartial(object: Partial<_124.SourceCodeInfo>): _124.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _124.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.SourceCodeInfo_Location;
            fromPartial(object: Partial<_124.SourceCodeInfo_Location>): _124.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _124.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.GeneratedCodeInfo;
            fromPartial(object: Partial<_124.GeneratedCodeInfo>): _124.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _124.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _124.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_124.GeneratedCodeInfo_Annotation>): _124.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _123.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _123.Any;
            fromPartial(object: Partial<_123.Any>): _123.Any;
        };
        Timestamp: {
            encode(message: _122.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _122.Timestamp;
            fromPartial(object: Partial<_122.Timestamp>): _122.Timestamp;
        };
        Duration: {
            encode(message: _121.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _121.Duration;
            fromPartial(object: Partial<_121.Duration>): _121.Duration;
        };
    };
}
