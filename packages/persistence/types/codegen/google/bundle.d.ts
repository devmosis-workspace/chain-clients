import * as _83 from "./api/http";
import * as _84 from "./api/httpbody";
import * as _85 from "./protobuf/any";
import * as _86 from "./protobuf/duration";
import * as _87 from "./protobuf/timestamp";
import * as _88 from "./protobuf/descriptor";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _84.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.HttpBody;
            fromPartial(object: Partial<_84.HttpBody>): _84.HttpBody;
        };
        Http: {
            encode(message: _83.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.Http;
            fromPartial(object: Partial<_83.Http>): _83.Http;
        };
        HttpRule: {
            encode(message: _83.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.HttpRule;
            fromPartial(object: Partial<_83.HttpRule>): _83.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _83.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.CustomHttpPattern;
            fromPartial(object: Partial<_83.CustomHttpPattern>): _83.CustomHttpPattern;
        };
    };
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _88.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _88.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _88.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _88.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _88.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _88.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _88.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _88.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _88.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _88.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _88.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _88.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _88.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _88.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _88.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _88.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _88.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _88.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _88.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _88.FieldOptions_CType;
        FieldOptions_JSType: typeof _88.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _88.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _88.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _88.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _88.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.FileDescriptorSet;
            fromPartial(object: Partial<_88.FileDescriptorSet>): _88.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _88.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.FileDescriptorProto;
            fromPartial(object: Partial<_88.FileDescriptorProto>): _88.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _88.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.DescriptorProto;
            fromPartial(object: Partial<_88.DescriptorProto>): _88.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _88.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_88.DescriptorProto_ExtensionRange>): _88.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _88.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_88.DescriptorProto_ReservedRange>): _88.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _88.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.ExtensionRangeOptions;
            fromPartial(object: Partial<_88.ExtensionRangeOptions>): _88.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _88.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.FieldDescriptorProto;
            fromPartial(object: Partial<_88.FieldDescriptorProto>): _88.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _88.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.OneofDescriptorProto;
            fromPartial(object: Partial<_88.OneofDescriptorProto>): _88.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _88.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.EnumDescriptorProto;
            fromPartial(object: Partial<_88.EnumDescriptorProto>): _88.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _88.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_88.EnumDescriptorProto_EnumReservedRange>): _88.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _88.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.EnumValueDescriptorProto;
            fromPartial(object: Partial<_88.EnumValueDescriptorProto>): _88.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _88.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.ServiceDescriptorProto;
            fromPartial(object: Partial<_88.ServiceDescriptorProto>): _88.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _88.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.MethodDescriptorProto;
            fromPartial(object: Partial<_88.MethodDescriptorProto>): _88.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _88.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.FileOptions;
            fromPartial(object: Partial<_88.FileOptions>): _88.FileOptions;
        };
        MessageOptions: {
            encode(message: _88.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.MessageOptions;
            fromPartial(object: Partial<_88.MessageOptions>): _88.MessageOptions;
        };
        FieldOptions: {
            encode(message: _88.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.FieldOptions;
            fromPartial(object: Partial<_88.FieldOptions>): _88.FieldOptions;
        };
        OneofOptions: {
            encode(message: _88.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.OneofOptions;
            fromPartial(object: Partial<_88.OneofOptions>): _88.OneofOptions;
        };
        EnumOptions: {
            encode(message: _88.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.EnumOptions;
            fromPartial(object: Partial<_88.EnumOptions>): _88.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _88.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.EnumValueOptions;
            fromPartial(object: Partial<_88.EnumValueOptions>): _88.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _88.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.ServiceOptions;
            fromPartial(object: Partial<_88.ServiceOptions>): _88.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _88.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.MethodOptions;
            fromPartial(object: Partial<_88.MethodOptions>): _88.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _88.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.UninterpretedOption;
            fromPartial(object: Partial<_88.UninterpretedOption>): _88.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _88.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_88.UninterpretedOption_NamePart>): _88.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _88.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.SourceCodeInfo;
            fromPartial(object: Partial<_88.SourceCodeInfo>): _88.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _88.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.SourceCodeInfo_Location;
            fromPartial(object: Partial<_88.SourceCodeInfo_Location>): _88.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _88.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.GeneratedCodeInfo;
            fromPartial(object: Partial<_88.GeneratedCodeInfo>): _88.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _88.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_88.GeneratedCodeInfo_Annotation>): _88.GeneratedCodeInfo_Annotation;
        };
        Timestamp: {
            encode(message: _87.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _87.Timestamp;
            fromPartial(object: Partial<_87.Timestamp>): _87.Timestamp;
        };
        Duration: {
            encode(message: _86.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.Duration;
            fromPartial(object: Partial<_86.Duration>): _86.Duration;
        };
        Any: {
            encode(message: _85.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.Any;
            fromPartial(object: Partial<_85.Any>): _85.Any;
        };
    };
}
