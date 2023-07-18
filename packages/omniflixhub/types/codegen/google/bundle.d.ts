import * as _85 from "./api/http";
import * as _86 from "./api/httpbody";
import * as _87 from "./protobuf/any";
import * as _88 from "./protobuf/timestamp";
import * as _89 from "./protobuf/duration";
import * as _90 from "./protobuf/descriptor";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _86.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _86.HttpBody;
            fromPartial(object: Partial<_86.HttpBody>): _86.HttpBody;
        };
        Http: {
            encode(message: _85.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.Http;
            fromPartial(object: Partial<_85.Http>): _85.Http;
        };
        HttpRule: {
            encode(message: _85.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.HttpRule;
            fromPartial(object: Partial<_85.HttpRule>): _85.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _85.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _85.CustomHttpPattern;
            fromPartial(object: Partial<_85.CustomHttpPattern>): _85.CustomHttpPattern;
        };
    };
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _90.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _90.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _90.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _90.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _90.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _90.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _90.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _90.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _90.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _90.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _90.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _90.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _90.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _90.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _90.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _90.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _90.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _90.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _90.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _90.FieldOptions_CType;
        FieldOptions_JSType: typeof _90.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _90.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _90.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _90.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _90.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.FileDescriptorSet;
            fromPartial(object: Partial<_90.FileDescriptorSet>): _90.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _90.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.FileDescriptorProto;
            fromPartial(object: Partial<_90.FileDescriptorProto>): _90.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _90.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.DescriptorProto;
            fromPartial(object: Partial<_90.DescriptorProto>): _90.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _90.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_90.DescriptorProto_ExtensionRange>): _90.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _90.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_90.DescriptorProto_ReservedRange>): _90.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _90.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.ExtensionRangeOptions;
            fromPartial(object: Partial<_90.ExtensionRangeOptions>): _90.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _90.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.FieldDescriptorProto;
            fromPartial(object: Partial<_90.FieldDescriptorProto>): _90.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _90.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.OneofDescriptorProto;
            fromPartial(object: Partial<_90.OneofDescriptorProto>): _90.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _90.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.EnumDescriptorProto;
            fromPartial(object: Partial<_90.EnumDescriptorProto>): _90.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _90.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_90.EnumDescriptorProto_EnumReservedRange>): _90.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _90.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.EnumValueDescriptorProto;
            fromPartial(object: Partial<_90.EnumValueDescriptorProto>): _90.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _90.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.ServiceDescriptorProto;
            fromPartial(object: Partial<_90.ServiceDescriptorProto>): _90.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _90.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.MethodDescriptorProto;
            fromPartial(object: Partial<_90.MethodDescriptorProto>): _90.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _90.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.FileOptions;
            fromPartial(object: Partial<_90.FileOptions>): _90.FileOptions;
        };
        MessageOptions: {
            encode(message: _90.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.MessageOptions;
            fromPartial(object: Partial<_90.MessageOptions>): _90.MessageOptions;
        };
        FieldOptions: {
            encode(message: _90.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.FieldOptions;
            fromPartial(object: Partial<_90.FieldOptions>): _90.FieldOptions;
        };
        OneofOptions: {
            encode(message: _90.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.OneofOptions;
            fromPartial(object: Partial<_90.OneofOptions>): _90.OneofOptions;
        };
        EnumOptions: {
            encode(message: _90.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.EnumOptions;
            fromPartial(object: Partial<_90.EnumOptions>): _90.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _90.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.EnumValueOptions;
            fromPartial(object: Partial<_90.EnumValueOptions>): _90.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _90.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.ServiceOptions;
            fromPartial(object: Partial<_90.ServiceOptions>): _90.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _90.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.MethodOptions;
            fromPartial(object: Partial<_90.MethodOptions>): _90.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _90.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.UninterpretedOption;
            fromPartial(object: Partial<_90.UninterpretedOption>): _90.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _90.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_90.UninterpretedOption_NamePart>): _90.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _90.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.SourceCodeInfo;
            fromPartial(object: Partial<_90.SourceCodeInfo>): _90.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _90.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.SourceCodeInfo_Location;
            fromPartial(object: Partial<_90.SourceCodeInfo_Location>): _90.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _90.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.GeneratedCodeInfo;
            fromPartial(object: Partial<_90.GeneratedCodeInfo>): _90.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _90.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_90.GeneratedCodeInfo_Annotation>): _90.GeneratedCodeInfo_Annotation;
        };
        Duration: {
            encode(message: _89.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.Duration;
            fromPartial(object: Partial<_89.Duration>): _89.Duration;
        };
        Timestamp: {
            encode(message: _88.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _88.Timestamp;
            fromPartial(object: Partial<_88.Timestamp>): _88.Timestamp;
        };
        Any: {
            encode(message: _87.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _87.Any;
            fromPartial(object: Partial<_87.Any>): _87.Any;
        };
    };
}
