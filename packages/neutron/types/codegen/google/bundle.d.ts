import * as _140 from "./api/http";
import * as _141 from "./protobuf/any";
import * as _142 from "./protobuf/timestamp";
import * as _143 from "./protobuf/duration";
import * as _144 from "./protobuf/descriptor";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _140.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _140.Http;
            fromPartial(object: Partial<_140.Http>): _140.Http;
        };
        HttpRule: {
            encode(message: _140.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _140.HttpRule;
            fromPartial(object: Partial<_140.HttpRule>): _140.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _140.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _140.CustomHttpPattern;
            fromPartial(object: Partial<_140.CustomHttpPattern>): _140.CustomHttpPattern;
        };
    };
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _144.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _144.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _144.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _144.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _144.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _144.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _144.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _144.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _144.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _144.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _144.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _144.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _144.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _144.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _144.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _144.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _144.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _144.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _144.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _144.FieldOptions_CType;
        FieldOptions_JSType: typeof _144.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _144.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _144.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _144.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _144.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.FileDescriptorSet;
            fromPartial(object: Partial<_144.FileDescriptorSet>): _144.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _144.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.FileDescriptorProto;
            fromPartial(object: Partial<_144.FileDescriptorProto>): _144.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _144.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.DescriptorProto;
            fromPartial(object: Partial<_144.DescriptorProto>): _144.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _144.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_144.DescriptorProto_ExtensionRange>): _144.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _144.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_144.DescriptorProto_ReservedRange>): _144.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _144.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.ExtensionRangeOptions;
            fromPartial(object: Partial<_144.ExtensionRangeOptions>): _144.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _144.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.FieldDescriptorProto;
            fromPartial(object: Partial<_144.FieldDescriptorProto>): _144.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _144.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.OneofDescriptorProto;
            fromPartial(object: Partial<_144.OneofDescriptorProto>): _144.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _144.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.EnumDescriptorProto;
            fromPartial(object: Partial<_144.EnumDescriptorProto>): _144.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _144.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_144.EnumDescriptorProto_EnumReservedRange>): _144.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _144.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.EnumValueDescriptorProto;
            fromPartial(object: Partial<_144.EnumValueDescriptorProto>): _144.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _144.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.ServiceDescriptorProto;
            fromPartial(object: Partial<_144.ServiceDescriptorProto>): _144.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _144.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.MethodDescriptorProto;
            fromPartial(object: Partial<_144.MethodDescriptorProto>): _144.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _144.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.FileOptions;
            fromPartial(object: Partial<_144.FileOptions>): _144.FileOptions;
        };
        MessageOptions: {
            encode(message: _144.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.MessageOptions;
            fromPartial(object: Partial<_144.MessageOptions>): _144.MessageOptions;
        };
        FieldOptions: {
            encode(message: _144.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.FieldOptions;
            fromPartial(object: Partial<_144.FieldOptions>): _144.FieldOptions;
        };
        OneofOptions: {
            encode(message: _144.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.OneofOptions;
            fromPartial(object: Partial<_144.OneofOptions>): _144.OneofOptions;
        };
        EnumOptions: {
            encode(message: _144.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.EnumOptions;
            fromPartial(object: Partial<_144.EnumOptions>): _144.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _144.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.EnumValueOptions;
            fromPartial(object: Partial<_144.EnumValueOptions>): _144.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _144.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.ServiceOptions;
            fromPartial(object: Partial<_144.ServiceOptions>): _144.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _144.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.MethodOptions;
            fromPartial(object: Partial<_144.MethodOptions>): _144.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _144.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.UninterpretedOption;
            fromPartial(object: Partial<_144.UninterpretedOption>): _144.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _144.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_144.UninterpretedOption_NamePart>): _144.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _144.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.SourceCodeInfo;
            fromPartial(object: Partial<_144.SourceCodeInfo>): _144.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _144.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.SourceCodeInfo_Location;
            fromPartial(object: Partial<_144.SourceCodeInfo_Location>): _144.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _144.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.GeneratedCodeInfo;
            fromPartial(object: Partial<_144.GeneratedCodeInfo>): _144.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _144.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _144.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_144.GeneratedCodeInfo_Annotation>): _144.GeneratedCodeInfo_Annotation;
        };
        Duration: {
            encode(message: _143.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _143.Duration;
            fromPartial(object: Partial<_143.Duration>): _143.Duration;
        };
        Timestamp: {
            encode(message: _142.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _142.Timestamp;
            fromPartial(object: Partial<_142.Timestamp>): _142.Timestamp;
        };
        Any: {
            encode(message: _141.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _141.Any;
            fromPartial(object: Partial<_141.Any>): _141.Any;
        };
    };
}
