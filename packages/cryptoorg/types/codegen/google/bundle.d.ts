import * as _164 from "./api/http";
import * as _165 from "./protobuf/any";
import * as _166 from "./protobuf/duration";
import * as _167 from "./protobuf/descriptor";
import * as _168 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _164.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _164.Http;
            fromPartial(object: Partial<_164.Http>): _164.Http;
        };
        HttpRule: {
            encode(message: _164.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _164.HttpRule;
            fromPartial(object: Partial<_164.HttpRule>): _164.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _164.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _164.CustomHttpPattern;
            fromPartial(object: Partial<_164.CustomHttpPattern>): _164.CustomHttpPattern;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _168.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _168.Timestamp;
            fromPartial(object: Partial<_168.Timestamp>): _168.Timestamp;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _167.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _167.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _167.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _167.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _167.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _167.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _167.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _167.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _167.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _167.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _167.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _167.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _167.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _167.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _167.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _167.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _167.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _167.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _167.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _167.FieldOptions_CType;
        FieldOptions_JSType: typeof _167.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _167.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _167.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _167.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _167.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.FileDescriptorSet;
            fromPartial(object: Partial<_167.FileDescriptorSet>): _167.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _167.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.FileDescriptorProto;
            fromPartial(object: Partial<_167.FileDescriptorProto>): _167.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _167.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.DescriptorProto;
            fromPartial(object: Partial<_167.DescriptorProto>): _167.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _167.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_167.DescriptorProto_ExtensionRange>): _167.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _167.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_167.DescriptorProto_ReservedRange>): _167.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _167.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.ExtensionRangeOptions;
            fromPartial(object: Partial<_167.ExtensionRangeOptions>): _167.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _167.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.FieldDescriptorProto;
            fromPartial(object: Partial<_167.FieldDescriptorProto>): _167.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _167.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.OneofDescriptorProto;
            fromPartial(object: Partial<_167.OneofDescriptorProto>): _167.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _167.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.EnumDescriptorProto;
            fromPartial(object: Partial<_167.EnumDescriptorProto>): _167.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _167.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_167.EnumDescriptorProto_EnumReservedRange>): _167.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _167.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.EnumValueDescriptorProto;
            fromPartial(object: Partial<_167.EnumValueDescriptorProto>): _167.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _167.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.ServiceDescriptorProto;
            fromPartial(object: Partial<_167.ServiceDescriptorProto>): _167.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _167.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.MethodDescriptorProto;
            fromPartial(object: Partial<_167.MethodDescriptorProto>): _167.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _167.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.FileOptions;
            fromPartial(object: Partial<_167.FileOptions>): _167.FileOptions;
        };
        MessageOptions: {
            encode(message: _167.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.MessageOptions;
            fromPartial(object: Partial<_167.MessageOptions>): _167.MessageOptions;
        };
        FieldOptions: {
            encode(message: _167.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.FieldOptions;
            fromPartial(object: Partial<_167.FieldOptions>): _167.FieldOptions;
        };
        OneofOptions: {
            encode(message: _167.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.OneofOptions;
            fromPartial(object: Partial<_167.OneofOptions>): _167.OneofOptions;
        };
        EnumOptions: {
            encode(message: _167.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.EnumOptions;
            fromPartial(object: Partial<_167.EnumOptions>): _167.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _167.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.EnumValueOptions;
            fromPartial(object: Partial<_167.EnumValueOptions>): _167.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _167.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.ServiceOptions;
            fromPartial(object: Partial<_167.ServiceOptions>): _167.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _167.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.MethodOptions;
            fromPartial(object: Partial<_167.MethodOptions>): _167.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _167.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.UninterpretedOption;
            fromPartial(object: Partial<_167.UninterpretedOption>): _167.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _167.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_167.UninterpretedOption_NamePart>): _167.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _167.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.SourceCodeInfo;
            fromPartial(object: Partial<_167.SourceCodeInfo>): _167.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _167.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.SourceCodeInfo_Location;
            fromPartial(object: Partial<_167.SourceCodeInfo_Location>): _167.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _167.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.GeneratedCodeInfo;
            fromPartial(object: Partial<_167.GeneratedCodeInfo>): _167.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _167.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _167.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_167.GeneratedCodeInfo_Annotation>): _167.GeneratedCodeInfo_Annotation;
        };
        Duration: {
            encode(message: _166.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _166.Duration;
            fromPartial(object: Partial<_166.Duration>): _166.Duration;
        };
        Any: {
            encode(message: _165.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _165.Any;
            fromPartial(object: Partial<_165.Any>): _165.Any;
        };
    };
}
