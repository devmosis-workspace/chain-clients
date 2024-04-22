import { GeneratedType, Registry } from "@cosmjs/proto-signing";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerController(value: axelar.permission.v1beta1.RegisterControllerRequest): {
            typeUrl: string;
            value: any;
        };
        deregisterController(value: axelar.permission.v1beta1.DeregisterControllerRequest): {
            typeUrl: string;
            value: any;
        };
        updateGovernanceKey(value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest): {
            typeUrl: string;
            value: any;
        };
    };
    withTypeUrl: {
        registerController(value: axelar.permission.v1beta1.RegisterControllerRequest): {
            typeUrl: string;
            value: axelar.permission.v1beta1.RegisterControllerRequest;
        };
        deregisterController(value: axelar.permission.v1beta1.DeregisterControllerRequest): {
            typeUrl: string;
            value: axelar.permission.v1beta1.DeregisterControllerRequest;
        };
        updateGovernanceKey(value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest): {
            typeUrl: string;
            value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest;
        };
    };
    fromJSON: {
        registerController(value: any): {
            typeUrl: string;
            value: any;
        };
        deregisterController(value: any): {
            typeUrl: string;
            value: any;
        };
        updateGovernanceKey(value: any): {
            typeUrl: string;
            value: any;
        };
    };
    fromPartial: {
        registerController(value: axelar.permission.v1beta1.RegisterControllerRequest): {
            typeUrl: string;
            value: any;
        };
        deregisterController(value: axelar.permission.v1beta1.DeregisterControllerRequest): {
            typeUrl: string;
            value: any;
        };
        updateGovernanceKey(value: axelar.permission.v1beta1.UpdateGovernanceKeyRequest): {
            typeUrl: string;
            value: any;
        };
    };
};
