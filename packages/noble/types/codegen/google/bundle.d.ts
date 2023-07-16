import * as _104 from "./api/http";
import * as _105 from "./protobuf/descriptor";
import * as _106 from "./protobuf/timestamp";
import * as _107 from "./protobuf/duration";
import * as _108 from "./protobuf/any";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _104.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _104.Http;
            fromPartial(object: Partial<_104.Http>): _104.Http;
        };
        HttpRule: {
            encode(message: _104.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _104.HttpRule;
            fromPartial(object: Partial<_104.HttpRule>): _104.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _104.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _104.CustomHttpPattern;
            fromPartial(object: Partial<_104.CustomHttpPattern>): _104.CustomHttpPattern;
        };
    };
    const protobuf: {
        Any: {
            encode(message: _108.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _108.Any;
            fromPartial(object: Partial<_108.Any>): _108.Any;
        };
        Duration: {
            encode(message: _107.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.Duration;
            fromPartial(object: Partial<_107.Duration>): _107.Duration;
        };
        Timestamp: {
            encode(message: _106.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _106.Timestamp;
            fromPartial(object: Partial<_106.Timestamp>): _106.Timestamp;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _105.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _105.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _105.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _105.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _105.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _105.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _105.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _105.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _105.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _105.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _105.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _105.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _105.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _105.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _105.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _105.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _105.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _105.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _105.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _105.FieldOptions_CType;
        FieldOptions_JSType: typeof _105.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _105.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _105.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _105.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _105.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.FileDescriptorSet;
            fromPartial(object: Partial<_105.FileDescriptorSet>): _105.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _105.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.FileDescriptorProto;
            fromPartial(object: Partial<_105.FileDescriptorProto>): _105.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _105.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.DescriptorProto;
            fromPartial(object: Partial<_105.DescriptorProto>): _105.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _105.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_105.DescriptorProto_ExtensionRange>): _105.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _105.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_105.DescriptorProto_ReservedRange>): _105.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _105.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.ExtensionRangeOptions;
            fromPartial(object: Partial<_105.ExtensionRangeOptions>): _105.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _105.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.FieldDescriptorProto;
            fromPartial(object: Partial<_105.FieldDescriptorProto>): _105.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _105.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.OneofDescriptorProto;
            fromPartial(object: Partial<_105.OneofDescriptorProto>): _105.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _105.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.EnumDescriptorProto;
            fromPartial(object: Partial<_105.EnumDescriptorProto>): _105.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _105.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_105.EnumDescriptorProto_EnumReservedRange>): _105.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _105.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.EnumValueDescriptorProto;
            fromPartial(object: Partial<_105.EnumValueDescriptorProto>): _105.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _105.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.ServiceDescriptorProto;
            fromPartial(object: Partial<_105.ServiceDescriptorProto>): _105.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _105.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.MethodDescriptorProto;
            fromPartial(object: Partial<_105.MethodDescriptorProto>): _105.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _105.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.FileOptions;
            fromPartial(object: Partial<_105.FileOptions>): _105.FileOptions;
        };
        MessageOptions: {
            encode(message: _105.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.MessageOptions;
            fromPartial(object: Partial<_105.MessageOptions>): _105.MessageOptions;
        };
        FieldOptions: {
            encode(message: _105.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.FieldOptions;
            fromPartial(object: Partial<_105.FieldOptions>): _105.FieldOptions;
        };
        OneofOptions: {
            encode(message: _105.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.OneofOptions;
            fromPartial(object: Partial<_105.OneofOptions>): _105.OneofOptions;
        };
        EnumOptions: {
            encode(message: _105.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.EnumOptions;
            fromPartial(object: Partial<_105.EnumOptions>): _105.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _105.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.EnumValueOptions;
            fromPartial(object: Partial<_105.EnumValueOptions>): _105.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _105.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.ServiceOptions;
            fromPartial(object: Partial<_105.ServiceOptions>): _105.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _105.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.MethodOptions;
            fromPartial(object: Partial<_105.MethodOptions>): _105.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _105.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.UninterpretedOption;
            fromPartial(object: Partial<_105.UninterpretedOption>): _105.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _105.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_105.UninterpretedOption_NamePart>): _105.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _105.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.SourceCodeInfo;
            fromPartial(object: Partial<_105.SourceCodeInfo>): _105.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _105.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.SourceCodeInfo_Location;
            fromPartial(object: Partial<_105.SourceCodeInfo_Location>): _105.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _105.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.GeneratedCodeInfo;
            fromPartial(object: Partial<_105.GeneratedCodeInfo>): _105.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _105.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_105.GeneratedCodeInfo_Annotation>): _105.GeneratedCodeInfo_Annotation;
        };
    };
}
