import * as _104 from "./protobuf/any";
import * as _105 from "./protobuf/timestamp";
import * as _106 from "./protobuf/duration";
import * as _107 from "./protobuf/descriptor";
export declare namespace google {
    const api: {};
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _107.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _107.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _107.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _107.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _107.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _107.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _107.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _107.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _107.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _107.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _107.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _107.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _107.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _107.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _107.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _107.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _107.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _107.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _107.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _107.FieldOptions_CType;
        FieldOptions_JSType: typeof _107.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _107.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _107.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _107.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _107.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.FileDescriptorSet;
            fromPartial(object: Partial<_107.FileDescriptorSet>): _107.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _107.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.FileDescriptorProto;
            fromPartial(object: Partial<_107.FileDescriptorProto>): _107.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _107.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.DescriptorProto;
            fromPartial(object: Partial<_107.DescriptorProto>): _107.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _107.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_107.DescriptorProto_ExtensionRange>): _107.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _107.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_107.DescriptorProto_ReservedRange>): _107.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _107.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.ExtensionRangeOptions;
            fromPartial(object: Partial<_107.ExtensionRangeOptions>): _107.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _107.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.FieldDescriptorProto;
            fromPartial(object: Partial<_107.FieldDescriptorProto>): _107.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _107.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.OneofDescriptorProto;
            fromPartial(object: Partial<_107.OneofDescriptorProto>): _107.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _107.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.EnumDescriptorProto;
            fromPartial(object: Partial<_107.EnumDescriptorProto>): _107.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _107.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_107.EnumDescriptorProto_EnumReservedRange>): _107.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _107.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.EnumValueDescriptorProto;
            fromPartial(object: Partial<_107.EnumValueDescriptorProto>): _107.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _107.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.ServiceDescriptorProto;
            fromPartial(object: Partial<_107.ServiceDescriptorProto>): _107.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _107.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.MethodDescriptorProto;
            fromPartial(object: Partial<_107.MethodDescriptorProto>): _107.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _107.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.FileOptions;
            fromPartial(object: Partial<_107.FileOptions>): _107.FileOptions;
        };
        MessageOptions: {
            encode(message: _107.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.MessageOptions;
            fromPartial(object: Partial<_107.MessageOptions>): _107.MessageOptions;
        };
        FieldOptions: {
            encode(message: _107.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.FieldOptions;
            fromPartial(object: Partial<_107.FieldOptions>): _107.FieldOptions;
        };
        OneofOptions: {
            encode(message: _107.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.OneofOptions;
            fromPartial(object: Partial<_107.OneofOptions>): _107.OneofOptions;
        };
        EnumOptions: {
            encode(message: _107.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.EnumOptions;
            fromPartial(object: Partial<_107.EnumOptions>): _107.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _107.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.EnumValueOptions;
            fromPartial(object: Partial<_107.EnumValueOptions>): _107.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _107.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.ServiceOptions;
            fromPartial(object: Partial<_107.ServiceOptions>): _107.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _107.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.MethodOptions;
            fromPartial(object: Partial<_107.MethodOptions>): _107.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _107.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.UninterpretedOption;
            fromPartial(object: Partial<_107.UninterpretedOption>): _107.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _107.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_107.UninterpretedOption_NamePart>): _107.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _107.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.SourceCodeInfo;
            fromPartial(object: Partial<_107.SourceCodeInfo>): _107.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _107.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.SourceCodeInfo_Location;
            fromPartial(object: Partial<_107.SourceCodeInfo_Location>): _107.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _107.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.GeneratedCodeInfo;
            fromPartial(object: Partial<_107.GeneratedCodeInfo>): _107.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _107.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _107.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_107.GeneratedCodeInfo_Annotation>): _107.GeneratedCodeInfo_Annotation;
        };
        Duration: {
            encode(message: _106.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _106.Duration;
            fromPartial(object: Partial<_106.Duration>): _106.Duration;
        };
        Timestamp: {
            encode(message: _105.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _105.Timestamp;
            fromPartial(object: Partial<_105.Timestamp>): _105.Timestamp;
        };
        Any: {
            encode(message: _104.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _104.Any;
            fromPartial(object: Partial<_104.Any>): _104.Any;
        };
    };
}
