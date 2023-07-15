import * as _149 from "./protobuf/any";
import * as _150 from "./protobuf/descriptor";
import * as _151 from "./protobuf/timestamp";
import * as _152 from "./protobuf/duration";
export declare namespace google {
    const api: {};
    const protobuf: {
        Duration: {
            encode(message: _152.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _152.Duration;
            fromPartial(object: Partial<_152.Duration>): _152.Duration;
        };
        Timestamp: {
            encode(message: _151.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _151.Timestamp;
            fromPartial(object: Partial<_151.Timestamp>): _151.Timestamp;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _150.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _150.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _150.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _150.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _150.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _150.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _150.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _150.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _150.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _150.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _150.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _150.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _150.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _150.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _150.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _150.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _150.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _150.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _150.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _150.FieldOptions_CType;
        FieldOptions_JSType: typeof _150.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _150.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _150.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _150.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _150.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.FileDescriptorSet;
            fromPartial(object: Partial<_150.FileDescriptorSet>): _150.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _150.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.FileDescriptorProto;
            fromPartial(object: Partial<_150.FileDescriptorProto>): _150.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _150.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.DescriptorProto;
            fromPartial(object: Partial<_150.DescriptorProto>): _150.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _150.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_150.DescriptorProto_ExtensionRange>): _150.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _150.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_150.DescriptorProto_ReservedRange>): _150.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _150.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.ExtensionRangeOptions;
            fromPartial(object: Partial<_150.ExtensionRangeOptions>): _150.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _150.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.FieldDescriptorProto;
            fromPartial(object: Partial<_150.FieldDescriptorProto>): _150.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _150.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.OneofDescriptorProto;
            fromPartial(object: Partial<_150.OneofDescriptorProto>): _150.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _150.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.EnumDescriptorProto;
            fromPartial(object: Partial<_150.EnumDescriptorProto>): _150.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _150.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_150.EnumDescriptorProto_EnumReservedRange>): _150.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _150.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.EnumValueDescriptorProto;
            fromPartial(object: Partial<_150.EnumValueDescriptorProto>): _150.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _150.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.ServiceDescriptorProto;
            fromPartial(object: Partial<_150.ServiceDescriptorProto>): _150.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _150.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.MethodDescriptorProto;
            fromPartial(object: Partial<_150.MethodDescriptorProto>): _150.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _150.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.FileOptions;
            fromPartial(object: Partial<_150.FileOptions>): _150.FileOptions;
        };
        MessageOptions: {
            encode(message: _150.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.MessageOptions;
            fromPartial(object: Partial<_150.MessageOptions>): _150.MessageOptions;
        };
        FieldOptions: {
            encode(message: _150.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.FieldOptions;
            fromPartial(object: Partial<_150.FieldOptions>): _150.FieldOptions;
        };
        OneofOptions: {
            encode(message: _150.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.OneofOptions;
            fromPartial(object: Partial<_150.OneofOptions>): _150.OneofOptions;
        };
        EnumOptions: {
            encode(message: _150.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.EnumOptions;
            fromPartial(object: Partial<_150.EnumOptions>): _150.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _150.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.EnumValueOptions;
            fromPartial(object: Partial<_150.EnumValueOptions>): _150.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _150.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.ServiceOptions;
            fromPartial(object: Partial<_150.ServiceOptions>): _150.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _150.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.MethodOptions;
            fromPartial(object: Partial<_150.MethodOptions>): _150.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _150.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.UninterpretedOption;
            fromPartial(object: Partial<_150.UninterpretedOption>): _150.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _150.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_150.UninterpretedOption_NamePart>): _150.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _150.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.SourceCodeInfo;
            fromPartial(object: Partial<_150.SourceCodeInfo>): _150.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _150.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.SourceCodeInfo_Location;
            fromPartial(object: Partial<_150.SourceCodeInfo_Location>): _150.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _150.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.GeneratedCodeInfo;
            fromPartial(object: Partial<_150.GeneratedCodeInfo>): _150.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _150.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _150.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_150.GeneratedCodeInfo_Annotation>): _150.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _149.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _149.Any;
            fromPartial(object: Partial<_149.Any>): _149.Any;
        };
    };
}
