import * as _107 from "./api/http";
import * as _108 from "./api/httpbody";
import * as _109 from "./protobuf/any";
import * as _110 from "./protobuf/timestamp";
import * as _111 from "./protobuf/duration";
import * as _112 from "./protobuf/descriptor";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _108.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.HttpBody;
            fromPartial(object: Partial<_108.HttpBody>): _108.HttpBody;
        };
        Http: {
            encode(message: _107.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.Http;
            fromPartial(object: Partial<_107.Http>): _107.Http;
        };
        HttpRule: {
            encode(message: _107.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.HttpRule;
            fromPartial(object: Partial<_107.HttpRule>): _107.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _107.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.CustomHttpPattern;
            fromPartial(object: Partial<_107.CustomHttpPattern>): _107.CustomHttpPattern;
        };
    };
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _112.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _112.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _112.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _112.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _112.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _112.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _112.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _112.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _112.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _112.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _112.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _112.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _112.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _112.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _112.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _112.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _112.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _112.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _112.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _112.FieldOptions_CType;
        FieldOptions_JSType: typeof _112.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _112.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _112.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _112.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _112.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.FileDescriptorSet;
            fromPartial(object: Partial<_112.FileDescriptorSet>): _112.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _112.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.FileDescriptorProto;
            fromPartial(object: Partial<_112.FileDescriptorProto>): _112.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _112.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.DescriptorProto;
            fromPartial(object: Partial<_112.DescriptorProto>): _112.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _112.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_112.DescriptorProto_ExtensionRange>): _112.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _112.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_112.DescriptorProto_ReservedRange>): _112.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _112.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.ExtensionRangeOptions;
            fromPartial(object: Partial<_112.ExtensionRangeOptions>): _112.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _112.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.FieldDescriptorProto;
            fromPartial(object: Partial<_112.FieldDescriptorProto>): _112.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _112.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.OneofDescriptorProto;
            fromPartial(object: Partial<_112.OneofDescriptorProto>): _112.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _112.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.EnumDescriptorProto;
            fromPartial(object: Partial<_112.EnumDescriptorProto>): _112.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _112.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_112.EnumDescriptorProto_EnumReservedRange>): _112.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _112.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.EnumValueDescriptorProto;
            fromPartial(object: Partial<_112.EnumValueDescriptorProto>): _112.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _112.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.ServiceDescriptorProto;
            fromPartial(object: Partial<_112.ServiceDescriptorProto>): _112.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _112.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.MethodDescriptorProto;
            fromPartial(object: Partial<_112.MethodDescriptorProto>): _112.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _112.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.FileOptions;
            fromPartial(object: Partial<_112.FileOptions>): _112.FileOptions;
        };
        MessageOptions: {
            encode(message: _112.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.MessageOptions;
            fromPartial(object: Partial<_112.MessageOptions>): _112.MessageOptions;
        };
        FieldOptions: {
            encode(message: _112.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.FieldOptions;
            fromPartial(object: Partial<_112.FieldOptions>): _112.FieldOptions;
        };
        OneofOptions: {
            encode(message: _112.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.OneofOptions;
            fromPartial(object: Partial<_112.OneofOptions>): _112.OneofOptions;
        };
        EnumOptions: {
            encode(message: _112.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.EnumOptions;
            fromPartial(object: Partial<_112.EnumOptions>): _112.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _112.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.EnumValueOptions;
            fromPartial(object: Partial<_112.EnumValueOptions>): _112.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _112.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.ServiceOptions;
            fromPartial(object: Partial<_112.ServiceOptions>): _112.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _112.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.MethodOptions;
            fromPartial(object: Partial<_112.MethodOptions>): _112.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _112.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.UninterpretedOption;
            fromPartial(object: Partial<_112.UninterpretedOption>): _112.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _112.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_112.UninterpretedOption_NamePart>): _112.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _112.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.SourceCodeInfo;
            fromPartial(object: Partial<_112.SourceCodeInfo>): _112.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _112.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.SourceCodeInfo_Location;
            fromPartial(object: Partial<_112.SourceCodeInfo_Location>): _112.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _112.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.GeneratedCodeInfo;
            fromPartial(object: Partial<_112.GeneratedCodeInfo>): _112.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _112.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_112.GeneratedCodeInfo_Annotation>): _112.GeneratedCodeInfo_Annotation;
        };
        Duration: {
            encode(message: _111.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.Duration;
            fromPartial(object: Partial<_111.Duration>): _111.Duration;
        };
        Timestamp: {
            encode(message: _110.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.Timestamp;
            fromPartial(object: Partial<_110.Timestamp>): _110.Timestamp;
        };
        Any: {
            encode(message: _109.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _109.Any;
            fromPartial(object: Partial<_109.Any>): _109.Any;
        };
    };
}
