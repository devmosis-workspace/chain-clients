import * as _89 from "./api/http";
import * as _90 from "./api/httpbody";
import * as _91 from "./protobuf/any";
import * as _92 from "./protobuf/duration";
import * as _93 from "./protobuf/empty";
import * as _94 from "./protobuf/timestamp";
import * as _95 from "./protobuf/descriptor";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _90.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _90.HttpBody;
            fromPartial(object: Partial<_90.HttpBody>): _90.HttpBody;
        };
        Http: {
            encode(message: _89.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.Http;
            fromPartial(object: Partial<_89.Http>): _89.Http;
        };
        HttpRule: {
            encode(message: _89.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.HttpRule;
            fromPartial(object: Partial<_89.HttpRule>): _89.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _89.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _89.CustomHttpPattern;
            fromPartial(object: Partial<_89.CustomHttpPattern>): _89.CustomHttpPattern;
        };
    };
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _95.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _95.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _95.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _95.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _95.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _95.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _95.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _95.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _95.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _95.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _95.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _95.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _95.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _95.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _95.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _95.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _95.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _95.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _95.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _95.FieldOptions_CType;
        FieldOptions_JSType: typeof _95.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _95.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _95.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _95.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _95.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.FileDescriptorSet;
            fromPartial(object: Partial<_95.FileDescriptorSet>): _95.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _95.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.FileDescriptorProto;
            fromPartial(object: Partial<_95.FileDescriptorProto>): _95.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _95.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.DescriptorProto;
            fromPartial(object: Partial<_95.DescriptorProto>): _95.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _95.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_95.DescriptorProto_ExtensionRange>): _95.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _95.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_95.DescriptorProto_ReservedRange>): _95.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _95.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ExtensionRangeOptions;
            fromPartial(object: Partial<_95.ExtensionRangeOptions>): _95.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _95.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.FieldDescriptorProto;
            fromPartial(object: Partial<_95.FieldDescriptorProto>): _95.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _95.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.OneofDescriptorProto;
            fromPartial(object: Partial<_95.OneofDescriptorProto>): _95.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _95.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.EnumDescriptorProto;
            fromPartial(object: Partial<_95.EnumDescriptorProto>): _95.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _95.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_95.EnumDescriptorProto_EnumReservedRange>): _95.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _95.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.EnumValueDescriptorProto;
            fromPartial(object: Partial<_95.EnumValueDescriptorProto>): _95.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _95.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ServiceDescriptorProto;
            fromPartial(object: Partial<_95.ServiceDescriptorProto>): _95.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _95.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.MethodDescriptorProto;
            fromPartial(object: Partial<_95.MethodDescriptorProto>): _95.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _95.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.FileOptions;
            fromPartial(object: Partial<_95.FileOptions>): _95.FileOptions;
        };
        MessageOptions: {
            encode(message: _95.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.MessageOptions;
            fromPartial(object: Partial<_95.MessageOptions>): _95.MessageOptions;
        };
        FieldOptions: {
            encode(message: _95.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.FieldOptions;
            fromPartial(object: Partial<_95.FieldOptions>): _95.FieldOptions;
        };
        OneofOptions: {
            encode(message: _95.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.OneofOptions;
            fromPartial(object: Partial<_95.OneofOptions>): _95.OneofOptions;
        };
        EnumOptions: {
            encode(message: _95.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.EnumOptions;
            fromPartial(object: Partial<_95.EnumOptions>): _95.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _95.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.EnumValueOptions;
            fromPartial(object: Partial<_95.EnumValueOptions>): _95.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _95.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.ServiceOptions;
            fromPartial(object: Partial<_95.ServiceOptions>): _95.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _95.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.MethodOptions;
            fromPartial(object: Partial<_95.MethodOptions>): _95.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _95.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.UninterpretedOption;
            fromPartial(object: Partial<_95.UninterpretedOption>): _95.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _95.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_95.UninterpretedOption_NamePart>): _95.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _95.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.SourceCodeInfo;
            fromPartial(object: Partial<_95.SourceCodeInfo>): _95.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _95.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.SourceCodeInfo_Location;
            fromPartial(object: Partial<_95.SourceCodeInfo_Location>): _95.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _95.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.GeneratedCodeInfo;
            fromPartial(object: Partial<_95.GeneratedCodeInfo>): _95.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _95.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_95.GeneratedCodeInfo_Annotation>): _95.GeneratedCodeInfo_Annotation;
        };
        Timestamp: {
            encode(message: _94.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _94.Timestamp;
            fromPartial(object: Partial<_94.Timestamp>): _94.Timestamp;
        };
        Empty: {
            encode(_: _93.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(_: any): _93.Empty;
            fromPartial(_: Partial<_93.Empty>): _93.Empty;
        };
        Duration: {
            encode(message: _92.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _92.Duration;
            fromPartial(object: Partial<_92.Duration>): _92.Duration;
        };
        Any: {
            encode(message: _91.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _91.Any;
            fromPartial(object: Partial<_91.Any>): _91.Any;
        };
    };
}
