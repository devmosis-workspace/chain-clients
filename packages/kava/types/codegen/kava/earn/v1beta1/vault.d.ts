import { StrategyType } from "./strategy";
import * as _m0 from "protobufjs/minimal";
/**
 * AllowedVault is a vault that is allowed to be created. These can be
 * modified via parameter governance.
 */
export interface AllowedVault {
    /** Denom is the only supported denomination of the vault for deposits and withdrawals. */
    denom: string;
    /** VaultStrategy is the strategy used for this vault. */
    strategies: StrategyType[];
    /**
     * IsPrivateVault is true if the vault only allows depositors contained in
     * AllowedDepositors.
     */
    isPrivateVault: boolean;
    /**
     * AllowedDepositors is a list of addresses that are allowed to deposit to
     * this vault if IsPrivateVault is true. Addresses not contained in this list
     * are not allowed to deposit into this vault. If IsPrivateVault is false,
     * this should be empty and ignored.
     */
    allowedDepositors: Uint8Array[];
}
/**
 * AllowedVault is a vault that is allowed to be created. These can be
 * modified via parameter governance.
 */
export interface AllowedVaultSDKType {
    denom: string;
    strategies: StrategyType[];
    is_private_vault: boolean;
    allowed_depositors: Uint8Array[];
}
/** VaultRecord is the state of a vault. */
export interface VaultRecord {
    /** TotalShares is the total distributed number of shares in the vault. */
    totalShares?: VaultShare;
}
/** VaultRecord is the state of a vault. */
export interface VaultRecordSDKType {
    total_shares?: VaultShareSDKType;
}
/** VaultShareRecord defines the vault shares owned by a depositor. */
export interface VaultShareRecord {
    /** Depositor represents the owner of the shares */
    depositor: Uint8Array;
    /** Shares represent the vault shares owned by the depositor. */
    shares: VaultShare[];
}
/** VaultShareRecord defines the vault shares owned by a depositor. */
export interface VaultShareRecordSDKType {
    depositor: Uint8Array;
    shares: VaultShareSDKType[];
}
/** VaultShare defines shares of a vault owned by a depositor. */
export interface VaultShare {
    denom: string;
    amount: string;
}
/** VaultShare defines shares of a vault owned by a depositor. */
export interface VaultShareSDKType {
    denom: string;
    amount: string;
}
export declare const AllowedVault: {
    encode(message: AllowedVault, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AllowedVault;
    fromPartial(object: Partial<AllowedVault>): AllowedVault;
};
export declare const VaultRecord: {
    encode(message: VaultRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): VaultRecord;
    fromPartial(object: Partial<VaultRecord>): VaultRecord;
};
export declare const VaultShareRecord: {
    encode(message: VaultShareRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): VaultShareRecord;
    fromPartial(object: Partial<VaultShareRecord>): VaultShareRecord;
};
export declare const VaultShare: {
    encode(message: VaultShare, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): VaultShare;
    fromPartial(object: Partial<VaultShare>): VaultShare;
};
