import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { RegisterControllerRequest, DeregisterControllerRequest, UpdateGovernanceKeyRequest } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerController(value: RegisterControllerRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        deregisterController(value: DeregisterControllerRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateGovernanceKey(value: UpdateGovernanceKeyRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerController(value: RegisterControllerRequest): {
            typeUrl: string;
            value: RegisterControllerRequest;
        };
        deregisterController(value: DeregisterControllerRequest): {
            typeUrl: string;
            value: DeregisterControllerRequest;
        };
        updateGovernanceKey(value: UpdateGovernanceKeyRequest): {
            typeUrl: string;
            value: UpdateGovernanceKeyRequest;
        };
    };
    fromJSON: {
        registerController(value: any): {
            typeUrl: string;
            value: RegisterControllerRequest;
        };
        deregisterController(value: any): {
            typeUrl: string;
            value: DeregisterControllerRequest;
        };
        updateGovernanceKey(value: any): {
            typeUrl: string;
            value: UpdateGovernanceKeyRequest;
        };
    };
    fromPartial: {
        registerController(value: RegisterControllerRequest): {
            typeUrl: string;
            value: RegisterControllerRequest;
        };
        deregisterController(value: DeregisterControllerRequest): {
            typeUrl: string;
            value: DeregisterControllerRequest;
        };
        updateGovernanceKey(value: UpdateGovernanceKeyRequest): {
            typeUrl: string;
            value: UpdateGovernanceKeyRequest;
        };
    };
};
