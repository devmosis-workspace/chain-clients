import * as _199 from "./protobuf/duration";
import * as _200 from "./protobuf/timestamp";
import * as _201 from "./protobuf/any";
import * as _202 from "./protobuf/descriptor";
export declare namespace google {
    const api: {};
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _202.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _202.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _202.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _202.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _202.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _202.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _202.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _202.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _202.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _202.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _202.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _202.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _202.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _202.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _202.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _202.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _202.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _202.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _202.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _202.FieldOptions_CType;
        FieldOptions_JSType: typeof _202.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _202.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _202.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _202.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _202.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.FileDescriptorSet;
            fromPartial(object: Partial<_202.FileDescriptorSet>): _202.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _202.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.FileDescriptorProto;
            fromPartial(object: Partial<_202.FileDescriptorProto>): _202.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _202.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.DescriptorProto;
            fromPartial(object: Partial<_202.DescriptorProto>): _202.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _202.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_202.DescriptorProto_ExtensionRange>): _202.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _202.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_202.DescriptorProto_ReservedRange>): _202.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _202.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.ExtensionRangeOptions;
            fromPartial(object: Partial<_202.ExtensionRangeOptions>): _202.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _202.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.FieldDescriptorProto;
            fromPartial(object: Partial<_202.FieldDescriptorProto>): _202.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _202.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.OneofDescriptorProto;
            fromPartial(object: Partial<_202.OneofDescriptorProto>): _202.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _202.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.EnumDescriptorProto;
            fromPartial(object: Partial<_202.EnumDescriptorProto>): _202.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _202.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_202.EnumDescriptorProto_EnumReservedRange>): _202.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _202.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.EnumValueDescriptorProto;
            fromPartial(object: Partial<_202.EnumValueDescriptorProto>): _202.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _202.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.ServiceDescriptorProto;
            fromPartial(object: Partial<_202.ServiceDescriptorProto>): _202.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _202.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.MethodDescriptorProto;
            fromPartial(object: Partial<_202.MethodDescriptorProto>): _202.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _202.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.FileOptions;
            fromPartial(object: Partial<_202.FileOptions>): _202.FileOptions;
        };
        MessageOptions: {
            encode(message: _202.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.MessageOptions;
            fromPartial(object: Partial<_202.MessageOptions>): _202.MessageOptions;
        };
        FieldOptions: {
            encode(message: _202.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.FieldOptions;
            fromPartial(object: Partial<_202.FieldOptions>): _202.FieldOptions;
        };
        OneofOptions: {
            encode(message: _202.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.OneofOptions;
            fromPartial(object: Partial<_202.OneofOptions>): _202.OneofOptions;
        };
        EnumOptions: {
            encode(message: _202.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.EnumOptions;
            fromPartial(object: Partial<_202.EnumOptions>): _202.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _202.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.EnumValueOptions;
            fromPartial(object: Partial<_202.EnumValueOptions>): _202.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _202.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.ServiceOptions;
            fromPartial(object: Partial<_202.ServiceOptions>): _202.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _202.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.MethodOptions;
            fromPartial(object: Partial<_202.MethodOptions>): _202.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _202.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.UninterpretedOption;
            fromPartial(object: Partial<_202.UninterpretedOption>): _202.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _202.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_202.UninterpretedOption_NamePart>): _202.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _202.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.SourceCodeInfo;
            fromPartial(object: Partial<_202.SourceCodeInfo>): _202.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _202.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.SourceCodeInfo_Location;
            fromPartial(object: Partial<_202.SourceCodeInfo_Location>): _202.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _202.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.GeneratedCodeInfo;
            fromPartial(object: Partial<_202.GeneratedCodeInfo>): _202.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _202.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _202.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_202.GeneratedCodeInfo_Annotation>): _202.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _201.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _201.Any;
            fromPartial(object: Partial<_201.Any>): _201.Any;
        };
        Timestamp: {
            encode(message: _200.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _200.Timestamp;
            fromPartial(object: Partial<_200.Timestamp>): _200.Timestamp;
        };
        Duration: {
            encode(message: _199.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _199.Duration;
            fromPartial(object: Partial<_199.Duration>): _199.Duration;
        };
    };
}
