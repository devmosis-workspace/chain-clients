import * as _133 from "./protobuf/timestamp";
import * as _134 from "./protobuf/duration";
import * as _135 from "./protobuf/any";
import * as _136 from "./protobuf/descriptor";
export declare namespace google {
    const api: {};
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _136.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _136.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _136.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _136.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _136.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _136.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _136.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _136.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _136.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _136.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _136.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _136.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _136.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _136.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _136.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _136.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _136.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _136.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _136.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _136.FieldOptions_CType;
        FieldOptions_JSType: typeof _136.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _136.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _136.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _136.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _136.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.FileDescriptorSet;
            fromPartial(object: Partial<_136.FileDescriptorSet>): _136.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _136.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.FileDescriptorProto;
            fromPartial(object: Partial<_136.FileDescriptorProto>): _136.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _136.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.DescriptorProto;
            fromPartial(object: Partial<_136.DescriptorProto>): _136.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _136.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_136.DescriptorProto_ExtensionRange>): _136.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _136.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_136.DescriptorProto_ReservedRange>): _136.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _136.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.ExtensionRangeOptions;
            fromPartial(object: Partial<_136.ExtensionRangeOptions>): _136.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _136.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.FieldDescriptorProto;
            fromPartial(object: Partial<_136.FieldDescriptorProto>): _136.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _136.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.OneofDescriptorProto;
            fromPartial(object: Partial<_136.OneofDescriptorProto>): _136.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _136.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.EnumDescriptorProto;
            fromPartial(object: Partial<_136.EnumDescriptorProto>): _136.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _136.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_136.EnumDescriptorProto_EnumReservedRange>): _136.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _136.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.EnumValueDescriptorProto;
            fromPartial(object: Partial<_136.EnumValueDescriptorProto>): _136.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _136.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.ServiceDescriptorProto;
            fromPartial(object: Partial<_136.ServiceDescriptorProto>): _136.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _136.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.MethodDescriptorProto;
            fromPartial(object: Partial<_136.MethodDescriptorProto>): _136.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _136.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.FileOptions;
            fromPartial(object: Partial<_136.FileOptions>): _136.FileOptions;
        };
        MessageOptions: {
            encode(message: _136.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.MessageOptions;
            fromPartial(object: Partial<_136.MessageOptions>): _136.MessageOptions;
        };
        FieldOptions: {
            encode(message: _136.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.FieldOptions;
            fromPartial(object: Partial<_136.FieldOptions>): _136.FieldOptions;
        };
        OneofOptions: {
            encode(message: _136.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.OneofOptions;
            fromPartial(object: Partial<_136.OneofOptions>): _136.OneofOptions;
        };
        EnumOptions: {
            encode(message: _136.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.EnumOptions;
            fromPartial(object: Partial<_136.EnumOptions>): _136.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _136.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.EnumValueOptions;
            fromPartial(object: Partial<_136.EnumValueOptions>): _136.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _136.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.ServiceOptions;
            fromPartial(object: Partial<_136.ServiceOptions>): _136.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _136.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.MethodOptions;
            fromPartial(object: Partial<_136.MethodOptions>): _136.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _136.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.UninterpretedOption;
            fromPartial(object: Partial<_136.UninterpretedOption>): _136.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _136.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_136.UninterpretedOption_NamePart>): _136.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _136.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.SourceCodeInfo;
            fromPartial(object: Partial<_136.SourceCodeInfo>): _136.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _136.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.SourceCodeInfo_Location;
            fromPartial(object: Partial<_136.SourceCodeInfo_Location>): _136.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _136.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.GeneratedCodeInfo;
            fromPartial(object: Partial<_136.GeneratedCodeInfo>): _136.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _136.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _136.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_136.GeneratedCodeInfo_Annotation>): _136.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _135.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _135.Any;
            fromPartial(object: Partial<_135.Any>): _135.Any;
        };
        Duration: {
            encode(message: _134.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _134.Duration;
            fromPartial(object: Partial<_134.Duration>): _134.Duration;
        };
        Timestamp: {
            encode(message: _133.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _133.Timestamp;
            fromPartial(object: Partial<_133.Timestamp>): _133.Timestamp;
        };
    };
}
