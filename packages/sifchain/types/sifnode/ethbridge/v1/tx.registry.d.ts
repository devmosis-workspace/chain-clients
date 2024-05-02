import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgLock, MsgBurn, MsgCreateEthBridgeClaim, MsgUpdateWhiteListValidator, MsgUpdateCethReceiverAccount, MsgRescueCeth, MsgSetBlacklist, MsgPause } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        lock(value: MsgLock): {
            typeUrl: string;
            value: Uint8Array;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: Uint8Array;
        };
        createEthBridgeClaim(value: MsgCreateEthBridgeClaim): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateWhiteListValidator(value: MsgUpdateWhiteListValidator): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateCethReceiverAccount(value: MsgUpdateCethReceiverAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        rescueCeth(value: MsgRescueCeth): {
            typeUrl: string;
            value: Uint8Array;
        };
        setBlacklist(value: MsgSetBlacklist): {
            typeUrl: string;
            value: Uint8Array;
        };
        setPause(value: MsgPause): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        lock(value: MsgLock): {
            typeUrl: string;
            value: MsgLock;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: MsgBurn;
        };
        createEthBridgeClaim(value: MsgCreateEthBridgeClaim): {
            typeUrl: string;
            value: MsgCreateEthBridgeClaim;
        };
        updateWhiteListValidator(value: MsgUpdateWhiteListValidator): {
            typeUrl: string;
            value: MsgUpdateWhiteListValidator;
        };
        updateCethReceiverAccount(value: MsgUpdateCethReceiverAccount): {
            typeUrl: string;
            value: MsgUpdateCethReceiverAccount;
        };
        rescueCeth(value: MsgRescueCeth): {
            typeUrl: string;
            value: MsgRescueCeth;
        };
        setBlacklist(value: MsgSetBlacklist): {
            typeUrl: string;
            value: MsgSetBlacklist;
        };
        setPause(value: MsgPause): {
            typeUrl: string;
            value: MsgPause;
        };
    };
    fromJSON: {
        lock(value: any): {
            typeUrl: string;
            value: MsgLock;
        };
        burn(value: any): {
            typeUrl: string;
            value: MsgBurn;
        };
        createEthBridgeClaim(value: any): {
            typeUrl: string;
            value: MsgCreateEthBridgeClaim;
        };
        updateWhiteListValidator(value: any): {
            typeUrl: string;
            value: MsgUpdateWhiteListValidator;
        };
        updateCethReceiverAccount(value: any): {
            typeUrl: string;
            value: MsgUpdateCethReceiverAccount;
        };
        rescueCeth(value: any): {
            typeUrl: string;
            value: MsgRescueCeth;
        };
        setBlacklist(value: any): {
            typeUrl: string;
            value: MsgSetBlacklist;
        };
        setPause(value: any): {
            typeUrl: string;
            value: MsgPause;
        };
    };
    fromPartial: {
        lock(value: MsgLock): {
            typeUrl: string;
            value: MsgLock;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: MsgBurn;
        };
        createEthBridgeClaim(value: MsgCreateEthBridgeClaim): {
            typeUrl: string;
            value: MsgCreateEthBridgeClaim;
        };
        updateWhiteListValidator(value: MsgUpdateWhiteListValidator): {
            typeUrl: string;
            value: MsgUpdateWhiteListValidator;
        };
        updateCethReceiverAccount(value: MsgUpdateCethReceiverAccount): {
            typeUrl: string;
            value: MsgUpdateCethReceiverAccount;
        };
        rescueCeth(value: MsgRescueCeth): {
            typeUrl: string;
            value: MsgRescueCeth;
        };
        setBlacklist(value: MsgSetBlacklist): {
            typeUrl: string;
            value: MsgSetBlacklist;
        };
        setPause(value: MsgPause): {
            typeUrl: string;
            value: MsgPause;
        };
    };
};
