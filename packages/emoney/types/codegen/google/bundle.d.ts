import * as _81 from "./api/http";
import * as _82 from "./api/httpbody";
import * as _83 from "./protobuf/any";
import * as _84 from "./protobuf/timestamp";
import * as _85 from "./protobuf/descriptor";
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
        fieldDescriptorProto_TypeFromJSON(object: any): _85.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _85.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _85.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _85.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _85.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _85.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _85.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _85.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _85.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _85.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _85.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _85.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _85.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _85.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _85.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _85.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _85.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _85.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _85.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _85.FieldOptions_CType;
        FieldOptions_JSType: typeof _85.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _85.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _85.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _85.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _85.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.FileDescriptorSet;
            fromPartial(object: Partial<_85.FileDescriptorSet>): _85.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _85.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.FileDescriptorProto;
            fromPartial(object: Partial<_85.FileDescriptorProto>): _85.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _85.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.DescriptorProto;
            fromPartial(object: Partial<_85.DescriptorProto>): _85.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _85.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_85.DescriptorProto_ExtensionRange>): _85.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _85.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_85.DescriptorProto_ReservedRange>): _85.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _85.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.ExtensionRangeOptions;
            fromPartial(object: Partial<_85.ExtensionRangeOptions>): _85.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _85.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.FieldDescriptorProto;
            fromPartial(object: Partial<_85.FieldDescriptorProto>): _85.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _85.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.OneofDescriptorProto;
            fromPartial(object: Partial<_85.OneofDescriptorProto>): _85.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _85.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.EnumDescriptorProto;
            fromPartial(object: Partial<_85.EnumDescriptorProto>): _85.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _85.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_85.EnumDescriptorProto_EnumReservedRange>): _85.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _85.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.EnumValueDescriptorProto;
            fromPartial(object: Partial<_85.EnumValueDescriptorProto>): _85.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _85.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.ServiceDescriptorProto;
            fromPartial(object: Partial<_85.ServiceDescriptorProto>): _85.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _85.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.MethodDescriptorProto;
            fromPartial(object: Partial<_85.MethodDescriptorProto>): _85.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _85.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.FileOptions;
            fromPartial(object: Partial<_85.FileOptions>): _85.FileOptions;
        };
        MessageOptions: {
            encode(message: _85.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.MessageOptions;
            fromPartial(object: Partial<_85.MessageOptions>): _85.MessageOptions;
        };
        FieldOptions: {
            encode(message: _85.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.FieldOptions;
            fromPartial(object: Partial<_85.FieldOptions>): _85.FieldOptions;
        };
        OneofOptions: {
            encode(message: _85.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.OneofOptions;
            fromPartial(object: Partial<_85.OneofOptions>): _85.OneofOptions;
        };
        EnumOptions: {
            encode(message: _85.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.EnumOptions;
            fromPartial(object: Partial<_85.EnumOptions>): _85.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _85.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.EnumValueOptions;
            fromPartial(object: Partial<_85.EnumValueOptions>): _85.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _85.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.ServiceOptions;
            fromPartial(object: Partial<_85.ServiceOptions>): _85.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _85.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.MethodOptions;
            fromPartial(object: Partial<_85.MethodOptions>): _85.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _85.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.UninterpretedOption;
            fromPartial(object: Partial<_85.UninterpretedOption>): _85.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _85.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_85.UninterpretedOption_NamePart>): _85.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _85.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.SourceCodeInfo;
            fromPartial(object: Partial<_85.SourceCodeInfo>): _85.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _85.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.SourceCodeInfo_Location;
            fromPartial(object: Partial<_85.SourceCodeInfo_Location>): _85.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _85.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.GeneratedCodeInfo;
            fromPartial(object: Partial<_85.GeneratedCodeInfo>): _85.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _85.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_85.GeneratedCodeInfo_Annotation>): _85.GeneratedCodeInfo_Annotation;
        };
        Timestamp: {
            encode(message: _84.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _84.Timestamp;
            fromPartial(object: Partial<_84.Timestamp>): _84.Timestamp;
        };
        Any: {
            encode(message: _83.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _83.Any;
            fromPartial(object: Partial<_83.Any>): _83.Any;
        };
    };
}
