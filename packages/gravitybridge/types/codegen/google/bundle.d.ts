import * as _81 from "./api/http";
import * as _82 from "./api/httpbody";
import * as _83 from "./protobuf/any";
import * as _84 from "./protobuf/descriptor";
import * as _85 from "./protobuf/timestamp";
import * as _86 from "./protobuf/duration";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _82.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _82.HttpBody;
            fromPartial(object: Partial<_82.HttpBody>): _82.HttpBody;
        };
        Http: {
            encode(message: _81.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _81.Http;
            fromPartial(object: Partial<_81.Http>): _81.Http;
        };
        HttpRule: {
            encode(message: _81.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _81.HttpRule;
            fromPartial(object: Partial<_81.HttpRule>): _81.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _81.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _81.CustomHttpPattern;
            fromPartial(object: Partial<_81.CustomHttpPattern>): _81.CustomHttpPattern;
        };
    };
    const protobuf: {
        Duration: {
            encode(message: _86.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.Duration;
            fromPartial(object: Partial<_86.Duration>): _86.Duration;
        };
        Timestamp: {
            encode(message: _85.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.Timestamp;
            fromPartial(object: Partial<_85.Timestamp>): _85.Timestamp;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _84.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _84.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _84.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _84.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _84.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _84.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _84.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _84.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _84.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _84.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _84.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _84.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _84.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _84.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _84.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _84.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _84.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _84.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _84.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _84.FieldOptions_CType;
        FieldOptions_JSType: typeof _84.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _84.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _84.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _84.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _84.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.FileDescriptorSet;
            fromPartial(object: Partial<_84.FileDescriptorSet>): _84.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _84.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.FileDescriptorProto;
            fromPartial(object: Partial<_84.FileDescriptorProto>): _84.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _84.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.DescriptorProto;
            fromPartial(object: Partial<_84.DescriptorProto>): _84.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _84.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_84.DescriptorProto_ExtensionRange>): _84.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _84.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_84.DescriptorProto_ReservedRange>): _84.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _84.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ExtensionRangeOptions;
            fromPartial(object: Partial<_84.ExtensionRangeOptions>): _84.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _84.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.FieldDescriptorProto;
            fromPartial(object: Partial<_84.FieldDescriptorProto>): _84.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _84.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.OneofDescriptorProto;
            fromPartial(object: Partial<_84.OneofDescriptorProto>): _84.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _84.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.EnumDescriptorProto;
            fromPartial(object: Partial<_84.EnumDescriptorProto>): _84.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _84.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_84.EnumDescriptorProto_EnumReservedRange>): _84.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _84.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.EnumValueDescriptorProto;
            fromPartial(object: Partial<_84.EnumValueDescriptorProto>): _84.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _84.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ServiceDescriptorProto;
            fromPartial(object: Partial<_84.ServiceDescriptorProto>): _84.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _84.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.MethodDescriptorProto;
            fromPartial(object: Partial<_84.MethodDescriptorProto>): _84.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _84.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.FileOptions;
            fromPartial(object: Partial<_84.FileOptions>): _84.FileOptions;
        };
        MessageOptions: {
            encode(message: _84.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.MessageOptions;
            fromPartial(object: Partial<_84.MessageOptions>): _84.MessageOptions;
        };
        FieldOptions: {
            encode(message: _84.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.FieldOptions;
            fromPartial(object: Partial<_84.FieldOptions>): _84.FieldOptions;
        };
        OneofOptions: {
            encode(message: _84.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.OneofOptions;
            fromPartial(object: Partial<_84.OneofOptions>): _84.OneofOptions;
        };
        EnumOptions: {
            encode(message: _84.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.EnumOptions;
            fromPartial(object: Partial<_84.EnumOptions>): _84.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _84.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.EnumValueOptions;
            fromPartial(object: Partial<_84.EnumValueOptions>): _84.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _84.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.ServiceOptions;
            fromPartial(object: Partial<_84.ServiceOptions>): _84.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _84.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.MethodOptions;
            fromPartial(object: Partial<_84.MethodOptions>): _84.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _84.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.UninterpretedOption;
            fromPartial(object: Partial<_84.UninterpretedOption>): _84.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _84.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_84.UninterpretedOption_NamePart>): _84.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _84.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.SourceCodeInfo;
            fromPartial(object: Partial<_84.SourceCodeInfo>): _84.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _84.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.SourceCodeInfo_Location;
            fromPartial(object: Partial<_84.SourceCodeInfo_Location>): _84.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _84.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.GeneratedCodeInfo;
            fromPartial(object: Partial<_84.GeneratedCodeInfo>): _84.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _84.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_84.GeneratedCodeInfo_Annotation>): _84.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _83.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.Any;
            fromPartial(object: Partial<_83.Any>): _83.Any;
        };
    };
}
