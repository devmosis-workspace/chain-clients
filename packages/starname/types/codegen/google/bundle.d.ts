import * as _95 from "./api/http";
import * as _96 from "./api/httpbody";
import * as _97 from "./protobuf/any";
import * as _98 from "./protobuf/duration";
import * as _99 from "./protobuf/wrappers";
import * as _100 from "./protobuf/timestamp";
import * as _101 from "./protobuf/descriptor";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _96.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _96.HttpBody;
            fromPartial(object: Partial<_96.HttpBody>): _96.HttpBody;
        };
        Http: {
            encode(message: _95.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.Http;
            fromPartial(object: Partial<_95.Http>): _95.Http;
        };
        HttpRule: {
            encode(message: _95.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.HttpRule;
            fromPartial(object: Partial<_95.HttpRule>): _95.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _95.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _95.CustomHttpPattern;
            fromPartial(object: Partial<_95.CustomHttpPattern>): _95.CustomHttpPattern;
        };
    };
    const protobuf: {
        fieldDescriptorProto_TypeFromJSON(object: any): _101.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _101.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _101.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _101.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _101.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _101.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _101.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _101.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _101.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _101.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _101.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _101.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _101.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _101.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _101.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _101.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _101.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _101.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _101.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _101.FieldOptions_CType;
        FieldOptions_JSType: typeof _101.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _101.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _101.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _101.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _101.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.FileDescriptorSet;
            fromPartial(object: Partial<_101.FileDescriptorSet>): _101.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _101.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.FileDescriptorProto;
            fromPartial(object: Partial<_101.FileDescriptorProto>): _101.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _101.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.DescriptorProto;
            fromPartial(object: Partial<_101.DescriptorProto>): _101.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _101.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_101.DescriptorProto_ExtensionRange>): _101.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _101.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_101.DescriptorProto_ReservedRange>): _101.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _101.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.ExtensionRangeOptions;
            fromPartial(object: Partial<_101.ExtensionRangeOptions>): _101.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _101.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.FieldDescriptorProto;
            fromPartial(object: Partial<_101.FieldDescriptorProto>): _101.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _101.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.OneofDescriptorProto;
            fromPartial(object: Partial<_101.OneofDescriptorProto>): _101.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _101.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.EnumDescriptorProto;
            fromPartial(object: Partial<_101.EnumDescriptorProto>): _101.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _101.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_101.EnumDescriptorProto_EnumReservedRange>): _101.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _101.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.EnumValueDescriptorProto;
            fromPartial(object: Partial<_101.EnumValueDescriptorProto>): _101.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _101.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.ServiceDescriptorProto;
            fromPartial(object: Partial<_101.ServiceDescriptorProto>): _101.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _101.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.MethodDescriptorProto;
            fromPartial(object: Partial<_101.MethodDescriptorProto>): _101.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _101.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.FileOptions;
            fromPartial(object: Partial<_101.FileOptions>): _101.FileOptions;
        };
        MessageOptions: {
            encode(message: _101.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.MessageOptions;
            fromPartial(object: Partial<_101.MessageOptions>): _101.MessageOptions;
        };
        FieldOptions: {
            encode(message: _101.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.FieldOptions;
            fromPartial(object: Partial<_101.FieldOptions>): _101.FieldOptions;
        };
        OneofOptions: {
            encode(message: _101.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.OneofOptions;
            fromPartial(object: Partial<_101.OneofOptions>): _101.OneofOptions;
        };
        EnumOptions: {
            encode(message: _101.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.EnumOptions;
            fromPartial(object: Partial<_101.EnumOptions>): _101.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _101.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.EnumValueOptions;
            fromPartial(object: Partial<_101.EnumValueOptions>): _101.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _101.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.ServiceOptions;
            fromPartial(object: Partial<_101.ServiceOptions>): _101.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _101.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.MethodOptions;
            fromPartial(object: Partial<_101.MethodOptions>): _101.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _101.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.UninterpretedOption;
            fromPartial(object: Partial<_101.UninterpretedOption>): _101.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _101.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_101.UninterpretedOption_NamePart>): _101.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _101.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.SourceCodeInfo;
            fromPartial(object: Partial<_101.SourceCodeInfo>): _101.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _101.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.SourceCodeInfo_Location;
            fromPartial(object: Partial<_101.SourceCodeInfo_Location>): _101.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _101.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.GeneratedCodeInfo;
            fromPartial(object: Partial<_101.GeneratedCodeInfo>): _101.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _101.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _101.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_101.GeneratedCodeInfo_Annotation>): _101.GeneratedCodeInfo_Annotation;
        };
        Timestamp: {
            encode(message: _100.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _100.Timestamp;
            fromPartial(object: Partial<_100.Timestamp>): _100.Timestamp;
        };
        DoubleValue: {
            encode(message: _99.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.DoubleValue;
            fromPartial(object: Partial<_99.DoubleValue>): _99.DoubleValue;
        };
        FloatValue: {
            encode(message: _99.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.FloatValue;
            fromPartial(object: Partial<_99.FloatValue>): _99.FloatValue;
        };
        Int64Value: {
            encode(message: _99.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.Int64Value;
            fromPartial(object: Partial<_99.Int64Value>): _99.Int64Value;
        };
        UInt64Value: {
            encode(message: _99.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.UInt64Value;
            fromPartial(object: Partial<_99.UInt64Value>): _99.UInt64Value;
        };
        Int32Value: {
            encode(message: _99.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.Int32Value;
            fromPartial(object: Partial<_99.Int32Value>): _99.Int32Value;
        };
        UInt32Value: {
            encode(message: _99.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.UInt32Value;
            fromPartial(object: Partial<_99.UInt32Value>): _99.UInt32Value;
        };
        BoolValue: {
            encode(message: _99.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.BoolValue;
            fromPartial(object: Partial<_99.BoolValue>): _99.BoolValue;
        };
        StringValue: {
            encode(message: _99.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.StringValue;
            fromPartial(object: Partial<_99.StringValue>): _99.StringValue;
        };
        BytesValue: {
            encode(message: _99.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _99.BytesValue;
            fromPartial(object: Partial<_99.BytesValue>): _99.BytesValue;
        };
        Duration: {
            encode(message: _98.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _98.Duration;
            fromPartial(object: Partial<_98.Duration>): _98.Duration;
        };
        Any: {
            encode(message: _97.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            fromJSON(object: any): _97.Any;
            fromPartial(object: Partial<_97.Any>): _97.Any;
        };
    };
}
