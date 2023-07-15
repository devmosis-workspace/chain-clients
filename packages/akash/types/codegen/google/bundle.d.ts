import * as _149 from "./protobuf/any";
import * as _150 from "./protobuf/timestamp";
import * as _151 from "./protobuf/duration";
import * as _152 from "./protobuf/descriptor";
export declare namespace google {
    const api: {};
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _152.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _152.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _152.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _152.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _152.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _152.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _152.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _152.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _152.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _152.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _152.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _152.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _152.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _152.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _152.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _152.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _152.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _152.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _152.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _152.FieldOptions_CType;
        FieldOptions_JSType: typeof _152.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _152.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _152.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _152.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _152.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.FileDescriptorSet;
            fromPartial(object: Partial<_152.FileDescriptorSet>): _152.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _152.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.FileDescriptorProto;
            fromPartial(object: Partial<_152.FileDescriptorProto>): _152.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _152.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.DescriptorProto;
            fromPartial(object: Partial<_152.DescriptorProto>): _152.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _152.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_152.DescriptorProto_ExtensionRange>): _152.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _152.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_152.DescriptorProto_ReservedRange>): _152.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _152.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.ExtensionRangeOptions;
            fromPartial(object: Partial<_152.ExtensionRangeOptions>): _152.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _152.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.FieldDescriptorProto;
            fromPartial(object: Partial<_152.FieldDescriptorProto>): _152.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _152.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.OneofDescriptorProto;
            fromPartial(object: Partial<_152.OneofDescriptorProto>): _152.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _152.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.EnumDescriptorProto;
            fromPartial(object: Partial<_152.EnumDescriptorProto>): _152.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _152.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_152.EnumDescriptorProto_EnumReservedRange>): _152.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _152.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.EnumValueDescriptorProto;
            fromPartial(object: Partial<_152.EnumValueDescriptorProto>): _152.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _152.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.ServiceDescriptorProto;
            fromPartial(object: Partial<_152.ServiceDescriptorProto>): _152.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _152.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.MethodDescriptorProto;
            fromPartial(object: Partial<_152.MethodDescriptorProto>): _152.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _152.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.FileOptions;
            fromPartial(object: Partial<_152.FileOptions>): _152.FileOptions;
        };
        MessageOptions: {
            encode(message: _152.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.MessageOptions;
            fromPartial(object: Partial<_152.MessageOptions>): _152.MessageOptions;
        };
        FieldOptions: {
            encode(message: _152.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.FieldOptions;
            fromPartial(object: Partial<_152.FieldOptions>): _152.FieldOptions;
        };
        OneofOptions: {
            encode(message: _152.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.OneofOptions;
            fromPartial(object: Partial<_152.OneofOptions>): _152.OneofOptions;
        };
        EnumOptions: {
            encode(message: _152.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.EnumOptions;
            fromPartial(object: Partial<_152.EnumOptions>): _152.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _152.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.EnumValueOptions;
            fromPartial(object: Partial<_152.EnumValueOptions>): _152.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _152.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.ServiceOptions;
            fromPartial(object: Partial<_152.ServiceOptions>): _152.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _152.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.MethodOptions;
            fromPartial(object: Partial<_152.MethodOptions>): _152.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _152.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.UninterpretedOption;
            fromPartial(object: Partial<_152.UninterpretedOption>): _152.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _152.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_152.UninterpretedOption_NamePart>): _152.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _152.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.SourceCodeInfo;
            fromPartial(object: Partial<_152.SourceCodeInfo>): _152.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _152.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.SourceCodeInfo_Location;
            fromPartial(object: Partial<_152.SourceCodeInfo_Location>): _152.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _152.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.GeneratedCodeInfo;
            fromPartial(object: Partial<_152.GeneratedCodeInfo>): _152.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _152.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_152.GeneratedCodeInfo_Annotation>): _152.GeneratedCodeInfo_Annotation;
        };
        Duration: {
            encode(message: _151.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.Duration;
            fromPartial(object: Partial<_151.Duration>): _151.Duration;
        };
        Timestamp: {
            encode(message: _150.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.Timestamp;
            fromPartial(object: Partial<_150.Timestamp>): _150.Timestamp;
        };
        Any: {
            encode(message: _149.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.Any;
            fromPartial(object: Partial<_149.Any>): _149.Any;
        };
    };
}
