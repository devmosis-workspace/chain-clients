import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./groupmsg";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createDeployment(value: MsgCreateDeployment): {
            typeUrl: string;
            value: Uint8Array;
        };
        depositDeployment(value: MsgDepositDeployment): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateDeployment(value: MsgUpdateDeployment): {
            typeUrl: string;
            value: Uint8Array;
        };
        closeDeployment(value: MsgCloseDeployment): {
            typeUrl: string;
            value: Uint8Array;
        };
        closeGroup(value: MsgCloseGroup): {
            typeUrl: string;
            value: Uint8Array;
        };
        pauseGroup(value: MsgPauseGroup): {
            typeUrl: string;
            value: Uint8Array;
        };
        startGroup(value: MsgStartGroup): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createDeployment(value: MsgCreateDeployment): {
            typeUrl: string;
            value: MsgCreateDeployment;
        };
        depositDeployment(value: MsgDepositDeployment): {
            typeUrl: string;
            value: MsgDepositDeployment;
        };
        updateDeployment(value: MsgUpdateDeployment): {
            typeUrl: string;
            value: MsgUpdateDeployment;
        };
        closeDeployment(value: MsgCloseDeployment): {
            typeUrl: string;
            value: MsgCloseDeployment;
        };
        closeGroup(value: MsgCloseGroup): {
            typeUrl: string;
            value: MsgCloseGroup;
        };
        pauseGroup(value: MsgPauseGroup): {
            typeUrl: string;
            value: MsgPauseGroup;
        };
        startGroup(value: MsgStartGroup): {
            typeUrl: string;
            value: MsgStartGroup;
        };
    };
    fromJSON: {
        createDeployment(value: any): {
            typeUrl: string;
            value: MsgCreateDeployment;
        };
        depositDeployment(value: any): {
            typeUrl: string;
            value: MsgDepositDeployment;
        };
        updateDeployment(value: any): {
            typeUrl: string;
            value: MsgUpdateDeployment;
        };
        closeDeployment(value: any): {
            typeUrl: string;
            value: MsgCloseDeployment;
        };
        closeGroup(value: any): {
            typeUrl: string;
            value: MsgCloseGroup;
        };
        pauseGroup(value: any): {
            typeUrl: string;
            value: MsgPauseGroup;
        };
        startGroup(value: any): {
            typeUrl: string;
            value: MsgStartGroup;
        };
    };
    fromPartial: {
        createDeployment(value: MsgCreateDeployment): {
            typeUrl: string;
            value: MsgCreateDeployment;
        };
        depositDeployment(value: MsgDepositDeployment): {
            typeUrl: string;
            value: MsgDepositDeployment;
        };
        updateDeployment(value: MsgUpdateDeployment): {
            typeUrl: string;
            value: MsgUpdateDeployment;
        };
        closeDeployment(value: MsgCloseDeployment): {
            typeUrl: string;
            value: MsgCloseDeployment;
        };
        closeGroup(value: MsgCloseGroup): {
            typeUrl: string;
            value: MsgCloseGroup;
        };
        pauseGroup(value: MsgPauseGroup): {
            typeUrl: string;
            value: MsgPauseGroup;
        };
        startGroup(value: MsgStartGroup): {
            typeUrl: string;
            value: MsgStartGroup;
        };
    };
};
