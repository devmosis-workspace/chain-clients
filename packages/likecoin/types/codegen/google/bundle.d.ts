import * as _136 from "./protobuf/timestamp";
import * as _137 from "./protobuf/any";
import * as _138 from "./protobuf/descriptor";
import * as _139 from "./protobuf/duration";
export declare namespace google {
    const api: {};
    const protobuf: {
        Duration: {
            encode(message: _139.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _139.Duration;
            fromPartial(object: Partial<_139.Duration>): _139.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _138.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _138.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _138.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _138.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _138.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _138.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _138.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _138.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _138.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _138.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _138.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _138.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _138.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _138.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _138.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _138.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _138.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _138.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _138.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _138.FieldOptions_CType;
        FieldOptions_JSType: typeof _138.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _138.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _138.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _138.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _138.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.FileDescriptorSet;
            fromPartial(object: Partial<_138.FileDescriptorSet>): _138.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _138.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.FileDescriptorProto;
            fromPartial(object: Partial<_138.FileDescriptorProto>): _138.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _138.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.DescriptorProto;
            fromPartial(object: Partial<_138.DescriptorProto>): _138.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _138.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_138.DescriptorProto_ExtensionRange>): _138.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _138.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_138.DescriptorProto_ReservedRange>): _138.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _138.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.ExtensionRangeOptions;
            fromPartial(object: Partial<_138.ExtensionRangeOptions>): _138.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _138.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.FieldDescriptorProto;
            fromPartial(object: Partial<_138.FieldDescriptorProto>): _138.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _138.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.OneofDescriptorProto;
            fromPartial(object: Partial<_138.OneofDescriptorProto>): _138.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _138.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.EnumDescriptorProto;
            fromPartial(object: Partial<_138.EnumDescriptorProto>): _138.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _138.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_138.EnumDescriptorProto_EnumReservedRange>): _138.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _138.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.EnumValueDescriptorProto;
            fromPartial(object: Partial<_138.EnumValueDescriptorProto>): _138.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _138.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.ServiceDescriptorProto;
            fromPartial(object: Partial<_138.ServiceDescriptorProto>): _138.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _138.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.MethodDescriptorProto;
            fromPartial(object: Partial<_138.MethodDescriptorProto>): _138.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _138.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.FileOptions;
            fromPartial(object: Partial<_138.FileOptions>): _138.FileOptions;
        };
        MessageOptions: {
            encode(message: _138.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.MessageOptions;
            fromPartial(object: Partial<_138.MessageOptions>): _138.MessageOptions;
        };
        FieldOptions: {
            encode(message: _138.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.FieldOptions;
            fromPartial(object: Partial<_138.FieldOptions>): _138.FieldOptions;
        };
        OneofOptions: {
            encode(message: _138.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.OneofOptions;
            fromPartial(object: Partial<_138.OneofOptions>): _138.OneofOptions;
        };
        EnumOptions: {
            encode(message: _138.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.EnumOptions;
            fromPartial(object: Partial<_138.EnumOptions>): _138.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _138.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.EnumValueOptions;
            fromPartial(object: Partial<_138.EnumValueOptions>): _138.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _138.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.ServiceOptions;
            fromPartial(object: Partial<_138.ServiceOptions>): _138.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _138.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.MethodOptions;
            fromPartial(object: Partial<_138.MethodOptions>): _138.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _138.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.UninterpretedOption;
            fromPartial(object: Partial<_138.UninterpretedOption>): _138.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _138.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_138.UninterpretedOption_NamePart>): _138.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _138.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.SourceCodeInfo;
            fromPartial(object: Partial<_138.SourceCodeInfo>): _138.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _138.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.SourceCodeInfo_Location;
            fromPartial(object: Partial<_138.SourceCodeInfo_Location>): _138.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _138.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.GeneratedCodeInfo;
            fromPartial(object: Partial<_138.GeneratedCodeInfo>): _138.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _138.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _138.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_138.GeneratedCodeInfo_Annotation>): _138.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _137.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _137.Any;
            fromPartial(object: Partial<_137.Any>): _137.Any;
        };
        Timestamp: {
            encode(message: _136.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.Timestamp;
            fromPartial(object: Partial<_136.Timestamp>): _136.Timestamp;
        };
    };
}
