import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgOpen, MsgClose, MsgForceClose, MsgUpdateParams, MsgUpdatePools, MsgUpdateRowanCollateral, MsgWhitelist, MsgDewhitelist, MsgAdminClose, MsgAdminCloseAll } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        open(value: MsgOpen): {
            typeUrl: string;
            value: Uint8Array;
        };
        close(value: MsgClose): {
            typeUrl: string;
            value: Uint8Array;
        };
        forceClose(value: MsgForceClose): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        updatePools(value: MsgUpdatePools): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateRowanCollateral(value: MsgUpdateRowanCollateral): {
            typeUrl: string;
            value: Uint8Array;
        };
        whitelist(value: MsgWhitelist): {
            typeUrl: string;
            value: Uint8Array;
        };
        dewhitelist(value: MsgDewhitelist): {
            typeUrl: string;
            value: Uint8Array;
        };
        adminClose(value: MsgAdminClose): {
            typeUrl: string;
            value: Uint8Array;
        };
        adminCloseAll(value: MsgAdminCloseAll): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        open(value: MsgOpen): {
            typeUrl: string;
            value: MsgOpen;
        };
        close(value: MsgClose): {
            typeUrl: string;
            value: MsgClose;
        };
        forceClose(value: MsgForceClose): {
            typeUrl: string;
            value: MsgForceClose;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        updatePools(value: MsgUpdatePools): {
            typeUrl: string;
            value: MsgUpdatePools;
        };
        updateRowanCollateral(value: MsgUpdateRowanCollateral): {
            typeUrl: string;
            value: MsgUpdateRowanCollateral;
        };
        whitelist(value: MsgWhitelist): {
            typeUrl: string;
            value: MsgWhitelist;
        };
        dewhitelist(value: MsgDewhitelist): {
            typeUrl: string;
            value: MsgDewhitelist;
        };
        adminClose(value: MsgAdminClose): {
            typeUrl: string;
            value: MsgAdminClose;
        };
        adminCloseAll(value: MsgAdminCloseAll): {
            typeUrl: string;
            value: MsgAdminCloseAll;
        };
    };
    fromJSON: {
        open(value: any): {
            typeUrl: string;
            value: MsgOpen;
        };
        close(value: any): {
            typeUrl: string;
            value: MsgClose;
        };
        forceClose(value: any): {
            typeUrl: string;
            value: MsgForceClose;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        updatePools(value: any): {
            typeUrl: string;
            value: MsgUpdatePools;
        };
        updateRowanCollateral(value: any): {
            typeUrl: string;
            value: MsgUpdateRowanCollateral;
        };
        whitelist(value: any): {
            typeUrl: string;
            value: MsgWhitelist;
        };
        dewhitelist(value: any): {
            typeUrl: string;
            value: MsgDewhitelist;
        };
        adminClose(value: any): {
            typeUrl: string;
            value: MsgAdminClose;
        };
        adminCloseAll(value: any): {
            typeUrl: string;
            value: MsgAdminCloseAll;
        };
    };
    fromPartial: {
        open(value: MsgOpen): {
            typeUrl: string;
            value: MsgOpen;
        };
        close(value: MsgClose): {
            typeUrl: string;
            value: MsgClose;
        };
        forceClose(value: MsgForceClose): {
            typeUrl: string;
            value: MsgForceClose;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        updatePools(value: MsgUpdatePools): {
            typeUrl: string;
            value: MsgUpdatePools;
        };
        updateRowanCollateral(value: MsgUpdateRowanCollateral): {
            typeUrl: string;
            value: MsgUpdateRowanCollateral;
        };
        whitelist(value: MsgWhitelist): {
            typeUrl: string;
            value: MsgWhitelist;
        };
        dewhitelist(value: MsgDewhitelist): {
            typeUrl: string;
            value: MsgDewhitelist;
        };
        adminClose(value: MsgAdminClose): {
            typeUrl: string;
            value: MsgAdminClose;
        };
        adminCloseAll(value: MsgAdminCloseAll): {
            typeUrl: string;
            value: MsgAdminCloseAll;
        };
    };
};
