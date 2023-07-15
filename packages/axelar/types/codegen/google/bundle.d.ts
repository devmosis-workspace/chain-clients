import * as _142 from "./api/http";
import * as _143 from "./protobuf/any";
import * as _144 from "./protobuf/duration";
import * as _145 from "./protobuf/timestamp";
import * as _146 from "./protobuf/descriptor";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _142.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.Http;
            fromPartial(object: Partial<_142.Http>): _142.Http;
        };
        HttpRule: {
            encode(message: _142.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.HttpRule;
            fromPartial(object: Partial<_142.HttpRule>): _142.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _142.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.CustomHttpPattern;
            fromPartial(object: Partial<_142.CustomHttpPattern>): _142.CustomHttpPattern;
        };
    };
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _146.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _146.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _146.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _146.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _146.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _146.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _146.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _146.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _146.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _146.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _146.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _146.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _146.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _146.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _146.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _146.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _146.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _146.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _146.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _146.FieldOptions_CType;
        FieldOptions_JSType: typeof _146.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _146.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _146.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _146.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _146.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.FileDescriptorSet;
            fromPartial(object: Partial<_146.FileDescriptorSet>): _146.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _146.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.FileDescriptorProto;
            fromPartial(object: Partial<_146.FileDescriptorProto>): _146.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _146.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.DescriptorProto;
            fromPartial(object: Partial<_146.DescriptorProto>): _146.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _146.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_146.DescriptorProto_ExtensionRange>): _146.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _146.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_146.DescriptorProto_ReservedRange>): _146.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _146.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.ExtensionRangeOptions;
            fromPartial(object: Partial<_146.ExtensionRangeOptions>): _146.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _146.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.FieldDescriptorProto;
            fromPartial(object: Partial<_146.FieldDescriptorProto>): _146.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _146.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.OneofDescriptorProto;
            fromPartial(object: Partial<_146.OneofDescriptorProto>): _146.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _146.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.EnumDescriptorProto;
            fromPartial(object: Partial<_146.EnumDescriptorProto>): _146.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _146.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_146.EnumDescriptorProto_EnumReservedRange>): _146.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _146.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.EnumValueDescriptorProto;
            fromPartial(object: Partial<_146.EnumValueDescriptorProto>): _146.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _146.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.ServiceDescriptorProto;
            fromPartial(object: Partial<_146.ServiceDescriptorProto>): _146.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _146.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.MethodDescriptorProto;
            fromPartial(object: Partial<_146.MethodDescriptorProto>): _146.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _146.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.FileOptions;
            fromPartial(object: Partial<_146.FileOptions>): _146.FileOptions;
        };
        MessageOptions: {
            encode(message: _146.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.MessageOptions;
            fromPartial(object: Partial<_146.MessageOptions>): _146.MessageOptions;
        };
        FieldOptions: {
            encode(message: _146.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.FieldOptions;
            fromPartial(object: Partial<_146.FieldOptions>): _146.FieldOptions;
        };
        OneofOptions: {
            encode(message: _146.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.OneofOptions;
            fromPartial(object: Partial<_146.OneofOptions>): _146.OneofOptions;
        };
        EnumOptions: {
            encode(message: _146.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.EnumOptions;
            fromPartial(object: Partial<_146.EnumOptions>): _146.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _146.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.EnumValueOptions;
            fromPartial(object: Partial<_146.EnumValueOptions>): _146.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _146.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.ServiceOptions;
            fromPartial(object: Partial<_146.ServiceOptions>): _146.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _146.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.MethodOptions;
            fromPartial(object: Partial<_146.MethodOptions>): _146.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _146.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.UninterpretedOption;
            fromPartial(object: Partial<_146.UninterpretedOption>): _146.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _146.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_146.UninterpretedOption_NamePart>): _146.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _146.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.SourceCodeInfo;
            fromPartial(object: Partial<_146.SourceCodeInfo>): _146.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _146.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.SourceCodeInfo_Location;
            fromPartial(object: Partial<_146.SourceCodeInfo_Location>): _146.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _146.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.GeneratedCodeInfo;
            fromPartial(object: Partial<_146.GeneratedCodeInfo>): _146.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _146.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _146.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_146.GeneratedCodeInfo_Annotation>): _146.GeneratedCodeInfo_Annotation;
        };
        Timestamp: {
            encode(message: _145.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _145.Timestamp;
            fromPartial(object: Partial<_145.Timestamp>): _145.Timestamp;
        };
        Duration: {
            encode(message: _144.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.Duration;
            fromPartial(object: Partial<_144.Duration>): _144.Duration;
        };
        Any: {
            encode(message: _143.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Any;
            fromPartial(object: Partial<_143.Any>): _143.Any;
        };
    };
}
