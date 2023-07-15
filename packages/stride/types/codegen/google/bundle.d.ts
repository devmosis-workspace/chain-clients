import * as _184 from "./protobuf/duration";
import * as _185 from "./protobuf/timestamp";
import * as _186 from "./protobuf/descriptor";
import * as _187 from "./protobuf/any";
export declare namespace google {
    const api: {};
    const protobuf: {
        Any: {
            encode(message: _187.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _187.Any;
            fromPartial(object: Partial<_187.Any>): _187.Any;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _186.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _186.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _186.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _186.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _186.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _186.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _186.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _186.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _186.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _186.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _186.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _186.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _186.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _186.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _186.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _186.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _186.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _186.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _186.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _186.FieldOptions_CType;
        FieldOptions_JSType: typeof _186.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _186.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _186.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _186.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _186.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.FileDescriptorSet;
            fromPartial(object: Partial<_186.FileDescriptorSet>): _186.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _186.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.FileDescriptorProto;
            fromPartial(object: Partial<_186.FileDescriptorProto>): _186.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _186.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.DescriptorProto;
            fromPartial(object: Partial<_186.DescriptorProto>): _186.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _186.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_186.DescriptorProto_ExtensionRange>): _186.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _186.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_186.DescriptorProto_ReservedRange>): _186.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _186.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.ExtensionRangeOptions;
            fromPartial(object: Partial<_186.ExtensionRangeOptions>): _186.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _186.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.FieldDescriptorProto;
            fromPartial(object: Partial<_186.FieldDescriptorProto>): _186.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _186.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.OneofDescriptorProto;
            fromPartial(object: Partial<_186.OneofDescriptorProto>): _186.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _186.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.EnumDescriptorProto;
            fromPartial(object: Partial<_186.EnumDescriptorProto>): _186.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _186.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_186.EnumDescriptorProto_EnumReservedRange>): _186.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _186.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.EnumValueDescriptorProto;
            fromPartial(object: Partial<_186.EnumValueDescriptorProto>): _186.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _186.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.ServiceDescriptorProto;
            fromPartial(object: Partial<_186.ServiceDescriptorProto>): _186.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _186.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.MethodDescriptorProto;
            fromPartial(object: Partial<_186.MethodDescriptorProto>): _186.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _186.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.FileOptions;
            fromPartial(object: Partial<_186.FileOptions>): _186.FileOptions;
        };
        MessageOptions: {
            encode(message: _186.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.MessageOptions;
            fromPartial(object: Partial<_186.MessageOptions>): _186.MessageOptions;
        };
        FieldOptions: {
            encode(message: _186.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.FieldOptions;
            fromPartial(object: Partial<_186.FieldOptions>): _186.FieldOptions;
        };
        OneofOptions: {
            encode(message: _186.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.OneofOptions;
            fromPartial(object: Partial<_186.OneofOptions>): _186.OneofOptions;
        };
        EnumOptions: {
            encode(message: _186.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.EnumOptions;
            fromPartial(object: Partial<_186.EnumOptions>): _186.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _186.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.EnumValueOptions;
            fromPartial(object: Partial<_186.EnumValueOptions>): _186.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _186.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.ServiceOptions;
            fromPartial(object: Partial<_186.ServiceOptions>): _186.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _186.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.MethodOptions;
            fromPartial(object: Partial<_186.MethodOptions>): _186.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _186.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.UninterpretedOption;
            fromPartial(object: Partial<_186.UninterpretedOption>): _186.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _186.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_186.UninterpretedOption_NamePart>): _186.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _186.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.SourceCodeInfo;
            fromPartial(object: Partial<_186.SourceCodeInfo>): _186.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _186.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.SourceCodeInfo_Location;
            fromPartial(object: Partial<_186.SourceCodeInfo_Location>): _186.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _186.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.GeneratedCodeInfo;
            fromPartial(object: Partial<_186.GeneratedCodeInfo>): _186.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _186.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _186.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_186.GeneratedCodeInfo_Annotation>): _186.GeneratedCodeInfo_Annotation;
        };
        Timestamp: {
            encode(message: _185.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _185.Timestamp;
            fromPartial(object: Partial<_185.Timestamp>): _185.Timestamp;
        };
        Duration: {
            encode(message: _184.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _184.Duration;
            fromPartial(object: Partial<_184.Duration>): _184.Duration;
        };
    };
}
