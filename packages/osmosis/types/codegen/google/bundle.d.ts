import * as _180 from "./protobuf/descriptor";
import * as _181 from "./protobuf/any";
import * as _182 from "./protobuf/timestamp";
import * as _183 from "./protobuf/duration";
export declare namespace google {
    const api: {};
    const protobuf: {
        Duration: {
            encode(message: _183.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _183.Duration;
            fromPartial(object: Partial<_183.Duration>): _183.Duration;
        };
        Timestamp: {
            encode(message: _182.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _182.Timestamp;
            fromPartial(object: Partial<_182.Timestamp>): _182.Timestamp;
        };
        Any: {
            encode(message: _181.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _181.Any;
            fromPartial(object: Partial<_181.Any>): _181.Any;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _180.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _180.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _180.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _180.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _180.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _180.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _180.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _180.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _180.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _180.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _180.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _180.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _180.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _180.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _180.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _180.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _180.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _180.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _180.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _180.FieldOptions_CType;
        FieldOptions_JSType: typeof _180.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _180.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _180.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _180.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _180.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.FileDescriptorSet;
            fromPartial(object: Partial<_180.FileDescriptorSet>): _180.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _180.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.FileDescriptorProto;
            fromPartial(object: Partial<_180.FileDescriptorProto>): _180.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _180.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.DescriptorProto;
            fromPartial(object: Partial<_180.DescriptorProto>): _180.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _180.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_180.DescriptorProto_ExtensionRange>): _180.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _180.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_180.DescriptorProto_ReservedRange>): _180.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _180.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.ExtensionRangeOptions;
            fromPartial(object: Partial<_180.ExtensionRangeOptions>): _180.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _180.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.FieldDescriptorProto;
            fromPartial(object: Partial<_180.FieldDescriptorProto>): _180.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _180.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.OneofDescriptorProto;
            fromPartial(object: Partial<_180.OneofDescriptorProto>): _180.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _180.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.EnumDescriptorProto;
            fromPartial(object: Partial<_180.EnumDescriptorProto>): _180.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _180.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_180.EnumDescriptorProto_EnumReservedRange>): _180.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _180.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.EnumValueDescriptorProto;
            fromPartial(object: Partial<_180.EnumValueDescriptorProto>): _180.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _180.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.ServiceDescriptorProto;
            fromPartial(object: Partial<_180.ServiceDescriptorProto>): _180.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _180.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.MethodDescriptorProto;
            fromPartial(object: Partial<_180.MethodDescriptorProto>): _180.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _180.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.FileOptions;
            fromPartial(object: Partial<_180.FileOptions>): _180.FileOptions;
        };
        MessageOptions: {
            encode(message: _180.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.MessageOptions;
            fromPartial(object: Partial<_180.MessageOptions>): _180.MessageOptions;
        };
        FieldOptions: {
            encode(message: _180.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.FieldOptions;
            fromPartial(object: Partial<_180.FieldOptions>): _180.FieldOptions;
        };
        OneofOptions: {
            encode(message: _180.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.OneofOptions;
            fromPartial(object: Partial<_180.OneofOptions>): _180.OneofOptions;
        };
        EnumOptions: {
            encode(message: _180.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.EnumOptions;
            fromPartial(object: Partial<_180.EnumOptions>): _180.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _180.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.EnumValueOptions;
            fromPartial(object: Partial<_180.EnumValueOptions>): _180.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _180.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.ServiceOptions;
            fromPartial(object: Partial<_180.ServiceOptions>): _180.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _180.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.MethodOptions;
            fromPartial(object: Partial<_180.MethodOptions>): _180.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _180.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.UninterpretedOption;
            fromPartial(object: Partial<_180.UninterpretedOption>): _180.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _180.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_180.UninterpretedOption_NamePart>): _180.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _180.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.SourceCodeInfo;
            fromPartial(object: Partial<_180.SourceCodeInfo>): _180.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _180.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.SourceCodeInfo_Location;
            fromPartial(object: Partial<_180.SourceCodeInfo_Location>): _180.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _180.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.GeneratedCodeInfo;
            fromPartial(object: Partial<_180.GeneratedCodeInfo>): _180.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _180.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _180.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_180.GeneratedCodeInfo_Annotation>): _180.GeneratedCodeInfo_Annotation;
        };
    };
}
