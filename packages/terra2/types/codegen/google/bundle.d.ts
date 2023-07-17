import * as _110 from "./protobuf/any";
import * as _111 from "./protobuf/descriptor";
import * as _112 from "./protobuf/timestamp";
import * as _113 from "./protobuf/duration";
export declare namespace google {
    const api: {};
    const protobuf: {
        Duration: {
            encode(message: _113.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _113.Duration;
            fromPartial(object: Partial<_113.Duration>): _113.Duration;
        };
        Timestamp: {
            encode(message: _112.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _112.Timestamp;
            fromPartial(object: Partial<_112.Timestamp>): _112.Timestamp;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _111.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _111.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _111.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _111.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _111.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _111.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _111.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _111.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _111.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _111.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _111.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _111.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _111.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _111.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _111.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _111.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _111.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _111.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _111.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _111.FieldOptions_CType;
        FieldOptions_JSType: typeof _111.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _111.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _111.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _111.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _111.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.FileDescriptorSet;
            fromPartial(object: Partial<_111.FileDescriptorSet>): _111.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _111.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.FileDescriptorProto;
            fromPartial(object: Partial<_111.FileDescriptorProto>): _111.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _111.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.DescriptorProto;
            fromPartial(object: Partial<_111.DescriptorProto>): _111.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _111.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_111.DescriptorProto_ExtensionRange>): _111.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _111.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_111.DescriptorProto_ReservedRange>): _111.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _111.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ExtensionRangeOptions;
            fromPartial(object: Partial<_111.ExtensionRangeOptions>): _111.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _111.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.FieldDescriptorProto;
            fromPartial(object: Partial<_111.FieldDescriptorProto>): _111.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _111.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.OneofDescriptorProto;
            fromPartial(object: Partial<_111.OneofDescriptorProto>): _111.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _111.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.EnumDescriptorProto;
            fromPartial(object: Partial<_111.EnumDescriptorProto>): _111.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _111.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_111.EnumDescriptorProto_EnumReservedRange>): _111.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _111.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.EnumValueDescriptorProto;
            fromPartial(object: Partial<_111.EnumValueDescriptorProto>): _111.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _111.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ServiceDescriptorProto;
            fromPartial(object: Partial<_111.ServiceDescriptorProto>): _111.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _111.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.MethodDescriptorProto;
            fromPartial(object: Partial<_111.MethodDescriptorProto>): _111.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _111.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.FileOptions;
            fromPartial(object: Partial<_111.FileOptions>): _111.FileOptions;
        };
        MessageOptions: {
            encode(message: _111.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.MessageOptions;
            fromPartial(object: Partial<_111.MessageOptions>): _111.MessageOptions;
        };
        FieldOptions: {
            encode(message: _111.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.FieldOptions;
            fromPartial(object: Partial<_111.FieldOptions>): _111.FieldOptions;
        };
        OneofOptions: {
            encode(message: _111.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.OneofOptions;
            fromPartial(object: Partial<_111.OneofOptions>): _111.OneofOptions;
        };
        EnumOptions: {
            encode(message: _111.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.EnumOptions;
            fromPartial(object: Partial<_111.EnumOptions>): _111.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _111.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.EnumValueOptions;
            fromPartial(object: Partial<_111.EnumValueOptions>): _111.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _111.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.ServiceOptions;
            fromPartial(object: Partial<_111.ServiceOptions>): _111.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _111.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.MethodOptions;
            fromPartial(object: Partial<_111.MethodOptions>): _111.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _111.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.UninterpretedOption;
            fromPartial(object: Partial<_111.UninterpretedOption>): _111.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _111.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_111.UninterpretedOption_NamePart>): _111.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _111.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.SourceCodeInfo;
            fromPartial(object: Partial<_111.SourceCodeInfo>): _111.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _111.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.SourceCodeInfo_Location;
            fromPartial(object: Partial<_111.SourceCodeInfo_Location>): _111.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _111.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.GeneratedCodeInfo;
            fromPartial(object: Partial<_111.GeneratedCodeInfo>): _111.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _111.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _111.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_111.GeneratedCodeInfo_Annotation>): _111.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _110.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _110.Any;
            fromPartial(object: Partial<_110.Any>): _110.Any;
        };
    };
}
