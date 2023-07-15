import * as _110 from "./api/http";
import * as _111 from "./api/httpbody";
import * as _112 from "./protobuf/any";
import * as _113 from "./protobuf/timestamp";
import * as _114 from "./protobuf/duration";
import * as _115 from "./protobuf/descriptor";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _111.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.HttpBody;
            fromPartial(object: Partial<_111.HttpBody>): _111.HttpBody;
        };
        Http: {
            encode(message: _110.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.Http;
            fromPartial(object: Partial<_110.Http>): _110.Http;
        };
        HttpRule: {
            encode(message: _110.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.HttpRule;
            fromPartial(object: Partial<_110.HttpRule>): _110.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _110.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.CustomHttpPattern;
            fromPartial(object: Partial<_110.CustomHttpPattern>): _110.CustomHttpPattern;
        };
    };
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _115.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _115.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _115.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _115.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _115.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _115.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _115.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _115.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _115.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _115.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _115.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _115.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _115.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _115.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _115.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _115.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _115.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _115.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _115.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _115.FieldOptions_CType;
        FieldOptions_JSType: typeof _115.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _115.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _115.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _115.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _115.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.FileDescriptorSet;
            fromPartial(object: Partial<_115.FileDescriptorSet>): _115.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _115.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.FileDescriptorProto;
            fromPartial(object: Partial<_115.FileDescriptorProto>): _115.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _115.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.DescriptorProto;
            fromPartial(object: Partial<_115.DescriptorProto>): _115.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _115.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_115.DescriptorProto_ExtensionRange>): _115.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _115.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_115.DescriptorProto_ReservedRange>): _115.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _115.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.ExtensionRangeOptions;
            fromPartial(object: Partial<_115.ExtensionRangeOptions>): _115.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _115.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.FieldDescriptorProto;
            fromPartial(object: Partial<_115.FieldDescriptorProto>): _115.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _115.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.OneofDescriptorProto;
            fromPartial(object: Partial<_115.OneofDescriptorProto>): _115.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _115.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.EnumDescriptorProto;
            fromPartial(object: Partial<_115.EnumDescriptorProto>): _115.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _115.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_115.EnumDescriptorProto_EnumReservedRange>): _115.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _115.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.EnumValueDescriptorProto;
            fromPartial(object: Partial<_115.EnumValueDescriptorProto>): _115.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _115.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.ServiceDescriptorProto;
            fromPartial(object: Partial<_115.ServiceDescriptorProto>): _115.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _115.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.MethodDescriptorProto;
            fromPartial(object: Partial<_115.MethodDescriptorProto>): _115.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _115.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.FileOptions;
            fromPartial(object: Partial<_115.FileOptions>): _115.FileOptions;
        };
        MessageOptions: {
            encode(message: _115.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.MessageOptions;
            fromPartial(object: Partial<_115.MessageOptions>): _115.MessageOptions;
        };
        FieldOptions: {
            encode(message: _115.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.FieldOptions;
            fromPartial(object: Partial<_115.FieldOptions>): _115.FieldOptions;
        };
        OneofOptions: {
            encode(message: _115.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.OneofOptions;
            fromPartial(object: Partial<_115.OneofOptions>): _115.OneofOptions;
        };
        EnumOptions: {
            encode(message: _115.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.EnumOptions;
            fromPartial(object: Partial<_115.EnumOptions>): _115.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _115.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.EnumValueOptions;
            fromPartial(object: Partial<_115.EnumValueOptions>): _115.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _115.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.ServiceOptions;
            fromPartial(object: Partial<_115.ServiceOptions>): _115.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _115.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.MethodOptions;
            fromPartial(object: Partial<_115.MethodOptions>): _115.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _115.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.UninterpretedOption;
            fromPartial(object: Partial<_115.UninterpretedOption>): _115.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _115.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_115.UninterpretedOption_NamePart>): _115.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _115.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.SourceCodeInfo;
            fromPartial(object: Partial<_115.SourceCodeInfo>): _115.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _115.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.SourceCodeInfo_Location;
            fromPartial(object: Partial<_115.SourceCodeInfo_Location>): _115.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _115.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.GeneratedCodeInfo;
            fromPartial(object: Partial<_115.GeneratedCodeInfo>): _115.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _115.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _115.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_115.GeneratedCodeInfo_Annotation>): _115.GeneratedCodeInfo_Annotation;
        };
        Duration: {
            encode(message: _114.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _114.Duration;
            fromPartial(object: Partial<_114.Duration>): _114.Duration;
        };
        Timestamp: {
            encode(message: _113.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Timestamp;
            fromPartial(object: Partial<_113.Timestamp>): _113.Timestamp;
        };
        Any: {
            encode(message: _112.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.Any;
            fromPartial(object: Partial<_112.Any>): _112.Any;
        };
    };
}
