import * as _157 from "./protobuf/timestamp";
import * as _158 from "./protobuf/any";
import * as _159 from "./protobuf/duration";
import * as _160 from "./protobuf/descriptor";
export declare namespace google {
    const api: {};
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _160.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _160.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _160.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _160.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _160.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _160.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _160.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _160.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _160.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _160.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _160.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _160.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _160.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _160.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _160.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _160.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _160.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _160.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _160.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _160.FieldOptions_CType;
        FieldOptions_JSType: typeof _160.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _160.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _160.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _160.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _160.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.FileDescriptorSet;
            fromPartial(object: Partial<_160.FileDescriptorSet>): _160.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _160.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.FileDescriptorProto;
            fromPartial(object: Partial<_160.FileDescriptorProto>): _160.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _160.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.DescriptorProto;
            fromPartial(object: Partial<_160.DescriptorProto>): _160.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _160.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_160.DescriptorProto_ExtensionRange>): _160.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _160.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_160.DescriptorProto_ReservedRange>): _160.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _160.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ExtensionRangeOptions;
            fromPartial(object: Partial<_160.ExtensionRangeOptions>): _160.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _160.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.FieldDescriptorProto;
            fromPartial(object: Partial<_160.FieldDescriptorProto>): _160.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _160.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.OneofDescriptorProto;
            fromPartial(object: Partial<_160.OneofDescriptorProto>): _160.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _160.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.EnumDescriptorProto;
            fromPartial(object: Partial<_160.EnumDescriptorProto>): _160.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _160.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_160.EnumDescriptorProto_EnumReservedRange>): _160.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _160.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.EnumValueDescriptorProto;
            fromPartial(object: Partial<_160.EnumValueDescriptorProto>): _160.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _160.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ServiceDescriptorProto;
            fromPartial(object: Partial<_160.ServiceDescriptorProto>): _160.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _160.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.MethodDescriptorProto;
            fromPartial(object: Partial<_160.MethodDescriptorProto>): _160.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _160.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.FileOptions;
            fromPartial(object: Partial<_160.FileOptions>): _160.FileOptions;
        };
        MessageOptions: {
            encode(message: _160.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.MessageOptions;
            fromPartial(object: Partial<_160.MessageOptions>): _160.MessageOptions;
        };
        FieldOptions: {
            encode(message: _160.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.FieldOptions;
            fromPartial(object: Partial<_160.FieldOptions>): _160.FieldOptions;
        };
        OneofOptions: {
            encode(message: _160.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.OneofOptions;
            fromPartial(object: Partial<_160.OneofOptions>): _160.OneofOptions;
        };
        EnumOptions: {
            encode(message: _160.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.EnumOptions;
            fromPartial(object: Partial<_160.EnumOptions>): _160.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _160.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.EnumValueOptions;
            fromPartial(object: Partial<_160.EnumValueOptions>): _160.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _160.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.ServiceOptions;
            fromPartial(object: Partial<_160.ServiceOptions>): _160.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _160.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.MethodOptions;
            fromPartial(object: Partial<_160.MethodOptions>): _160.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _160.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.UninterpretedOption;
            fromPartial(object: Partial<_160.UninterpretedOption>): _160.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _160.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_160.UninterpretedOption_NamePart>): _160.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _160.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.SourceCodeInfo;
            fromPartial(object: Partial<_160.SourceCodeInfo>): _160.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _160.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.SourceCodeInfo_Location;
            fromPartial(object: Partial<_160.SourceCodeInfo_Location>): _160.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _160.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.GeneratedCodeInfo;
            fromPartial(object: Partial<_160.GeneratedCodeInfo>): _160.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _160.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _160.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_160.GeneratedCodeInfo_Annotation>): _160.GeneratedCodeInfo_Annotation;
        };
        Duration: {
            encode(message: _159.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _159.Duration;
            fromPartial(object: Partial<_159.Duration>): _159.Duration;
        };
        Any: {
            encode(message: _158.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _158.Any;
            fromPartial(object: Partial<_158.Any>): _158.Any;
        };
        Timestamp: {
            encode(message: _157.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _157.Timestamp;
            fromPartial(object: Partial<_157.Timestamp>): _157.Timestamp;
        };
    };
}
