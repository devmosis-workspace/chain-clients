import * as _130 from "./protobuf/timestamp";
import * as _131 from "./protobuf/any";
import * as _132 from "./protobuf/descriptor";
import * as _133 from "./protobuf/duration";
export declare namespace google {
    const api: {};
    const protobuf: {
        Duration: {
            encode(message: _133.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _133.Duration;
            fromPartial(object: Partial<_133.Duration>): _133.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _132.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _132.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _132.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _132.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _132.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _132.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _132.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _132.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _132.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _132.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _132.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _132.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _132.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _132.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _132.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _132.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _132.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _132.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _132.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _132.FieldOptions_CType;
        FieldOptions_JSType: typeof _132.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _132.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _132.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _132.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _132.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.FileDescriptorSet;
            fromPartial(object: Partial<_132.FileDescriptorSet>): _132.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _132.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.FileDescriptorProto;
            fromPartial(object: Partial<_132.FileDescriptorProto>): _132.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _132.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.DescriptorProto;
            fromPartial(object: Partial<_132.DescriptorProto>): _132.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _132.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_132.DescriptorProto_ExtensionRange>): _132.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _132.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_132.DescriptorProto_ReservedRange>): _132.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _132.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.ExtensionRangeOptions;
            fromPartial(object: Partial<_132.ExtensionRangeOptions>): _132.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _132.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.FieldDescriptorProto;
            fromPartial(object: Partial<_132.FieldDescriptorProto>): _132.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _132.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.OneofDescriptorProto;
            fromPartial(object: Partial<_132.OneofDescriptorProto>): _132.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _132.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.EnumDescriptorProto;
            fromPartial(object: Partial<_132.EnumDescriptorProto>): _132.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _132.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_132.EnumDescriptorProto_EnumReservedRange>): _132.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _132.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.EnumValueDescriptorProto;
            fromPartial(object: Partial<_132.EnumValueDescriptorProto>): _132.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _132.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.ServiceDescriptorProto;
            fromPartial(object: Partial<_132.ServiceDescriptorProto>): _132.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _132.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.MethodDescriptorProto;
            fromPartial(object: Partial<_132.MethodDescriptorProto>): _132.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _132.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.FileOptions;
            fromPartial(object: Partial<_132.FileOptions>): _132.FileOptions;
        };
        MessageOptions: {
            encode(message: _132.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.MessageOptions;
            fromPartial(object: Partial<_132.MessageOptions>): _132.MessageOptions;
        };
        FieldOptions: {
            encode(message: _132.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.FieldOptions;
            fromPartial(object: Partial<_132.FieldOptions>): _132.FieldOptions;
        };
        OneofOptions: {
            encode(message: _132.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.OneofOptions;
            fromPartial(object: Partial<_132.OneofOptions>): _132.OneofOptions;
        };
        EnumOptions: {
            encode(message: _132.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.EnumOptions;
            fromPartial(object: Partial<_132.EnumOptions>): _132.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _132.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.EnumValueOptions;
            fromPartial(object: Partial<_132.EnumValueOptions>): _132.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _132.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.ServiceOptions;
            fromPartial(object: Partial<_132.ServiceOptions>): _132.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _132.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.MethodOptions;
            fromPartial(object: Partial<_132.MethodOptions>): _132.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _132.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.UninterpretedOption;
            fromPartial(object: Partial<_132.UninterpretedOption>): _132.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _132.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_132.UninterpretedOption_NamePart>): _132.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _132.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.SourceCodeInfo;
            fromPartial(object: Partial<_132.SourceCodeInfo>): _132.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _132.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.SourceCodeInfo_Location;
            fromPartial(object: Partial<_132.SourceCodeInfo_Location>): _132.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _132.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.GeneratedCodeInfo;
            fromPartial(object: Partial<_132.GeneratedCodeInfo>): _132.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _132.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _132.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_132.GeneratedCodeInfo_Annotation>): _132.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _131.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _131.Any;
            fromPartial(object: Partial<_131.Any>): _131.Any;
        };
        Timestamp: {
            encode(message: _130.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _130.Timestamp;
            fromPartial(object: Partial<_130.Timestamp>): _130.Timestamp;
        };
    };
}
