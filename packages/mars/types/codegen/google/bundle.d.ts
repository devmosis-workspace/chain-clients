import * as _117 from "./protobuf/timestamp";
import * as _118 from "./protobuf/any";
import * as _119 from "./protobuf/descriptor";
import * as _120 from "./protobuf/duration";
export declare namespace google {
    const api: {};
    const protobuf: {
        Duration: {
            encode(message: _120.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _120.Duration;
            fromPartial(object: Partial<_120.Duration>): _120.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _119.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _119.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _119.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _119.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _119.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _119.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _119.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _119.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _119.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _119.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _119.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _119.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _119.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _119.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _119.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _119.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _119.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _119.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _119.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _119.FieldOptions_CType;
        FieldOptions_JSType: typeof _119.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _119.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _119.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _119.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _119.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.FileDescriptorSet;
            fromPartial(object: Partial<_119.FileDescriptorSet>): _119.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _119.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.FileDescriptorProto;
            fromPartial(object: Partial<_119.FileDescriptorProto>): _119.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _119.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.DescriptorProto;
            fromPartial(object: Partial<_119.DescriptorProto>): _119.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _119.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_119.DescriptorProto_ExtensionRange>): _119.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _119.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_119.DescriptorProto_ReservedRange>): _119.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _119.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ExtensionRangeOptions;
            fromPartial(object: Partial<_119.ExtensionRangeOptions>): _119.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _119.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.FieldDescriptorProto;
            fromPartial(object: Partial<_119.FieldDescriptorProto>): _119.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _119.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.OneofDescriptorProto;
            fromPartial(object: Partial<_119.OneofDescriptorProto>): _119.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _119.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.EnumDescriptorProto;
            fromPartial(object: Partial<_119.EnumDescriptorProto>): _119.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _119.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_119.EnumDescriptorProto_EnumReservedRange>): _119.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _119.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.EnumValueDescriptorProto;
            fromPartial(object: Partial<_119.EnumValueDescriptorProto>): _119.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _119.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ServiceDescriptorProto;
            fromPartial(object: Partial<_119.ServiceDescriptorProto>): _119.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _119.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.MethodDescriptorProto;
            fromPartial(object: Partial<_119.MethodDescriptorProto>): _119.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _119.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.FileOptions;
            fromPartial(object: Partial<_119.FileOptions>): _119.FileOptions;
        };
        MessageOptions: {
            encode(message: _119.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.MessageOptions;
            fromPartial(object: Partial<_119.MessageOptions>): _119.MessageOptions;
        };
        FieldOptions: {
            encode(message: _119.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.FieldOptions;
            fromPartial(object: Partial<_119.FieldOptions>): _119.FieldOptions;
        };
        OneofOptions: {
            encode(message: _119.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.OneofOptions;
            fromPartial(object: Partial<_119.OneofOptions>): _119.OneofOptions;
        };
        EnumOptions: {
            encode(message: _119.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.EnumOptions;
            fromPartial(object: Partial<_119.EnumOptions>): _119.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _119.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.EnumValueOptions;
            fromPartial(object: Partial<_119.EnumValueOptions>): _119.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _119.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.ServiceOptions;
            fromPartial(object: Partial<_119.ServiceOptions>): _119.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _119.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.MethodOptions;
            fromPartial(object: Partial<_119.MethodOptions>): _119.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _119.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.UninterpretedOption;
            fromPartial(object: Partial<_119.UninterpretedOption>): _119.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _119.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_119.UninterpretedOption_NamePart>): _119.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _119.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.SourceCodeInfo;
            fromPartial(object: Partial<_119.SourceCodeInfo>): _119.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _119.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.SourceCodeInfo_Location;
            fromPartial(object: Partial<_119.SourceCodeInfo_Location>): _119.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _119.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.GeneratedCodeInfo;
            fromPartial(object: Partial<_119.GeneratedCodeInfo>): _119.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _119.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _119.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_119.GeneratedCodeInfo_Annotation>): _119.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _118.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _118.Any;
            fromPartial(object: Partial<_118.Any>): _118.Any;
        };
        Timestamp: {
            encode(message: _117.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _117.Timestamp;
            fromPartial(object: Partial<_117.Timestamp>): _117.Timestamp;
        };
    };
}
