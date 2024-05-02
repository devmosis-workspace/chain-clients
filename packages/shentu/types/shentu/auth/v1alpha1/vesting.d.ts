import { BaseVestingAccount, BaseVestingAccountAmino, BaseVestingAccountSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** ManualVestingAccount implements the VestingAccount interface. */
export interface ManualVestingAccount {
    baseVestingAccount?: BaseVestingAccount;
    vestedCoins: Coin[];
    unlocker: string;
}
export interface ManualVestingAccountProtoMsg {
    typeUrl: "/cosmos.auth.v1alpha1.ManualVestingAccount";
    value: Uint8Array;
}
/** ManualVestingAccount implements the VestingAccount interface. */
export interface ManualVestingAccountAmino {
    base_vesting_account?: BaseVestingAccountAmino;
    vested_coins?: CoinAmino[];
    unlocker?: string;
}
export interface ManualVestingAccountAminoMsg {
    type: "cosmos-sdk/ManualVestingAccount";
    value: ManualVestingAccountAmino;
}
/** ManualVestingAccount implements the VestingAccount interface. */
export interface ManualVestingAccountSDKType {
    base_vesting_account?: BaseVestingAccountSDKType;
    vested_coins: CoinSDKType[];
    unlocker: string;
}
export declare const ManualVestingAccount: {
    typeUrl: string;
    encode(message: ManualVestingAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ManualVestingAccount;
    fromPartial(object: Partial<ManualVestingAccount>): ManualVestingAccount;
    fromAmino(object: ManualVestingAccountAmino): ManualVestingAccount;
    toAmino(message: ManualVestingAccount): ManualVestingAccountAmino;
    fromAminoMsg(object: ManualVestingAccountAminoMsg): ManualVestingAccount;
    toAminoMsg(message: ManualVestingAccount): ManualVestingAccountAminoMsg;
    fromProtoMsg(message: ManualVestingAccountProtoMsg): ManualVestingAccount;
    toProto(message: ManualVestingAccount): Uint8Array;
    toProtoMsg(message: ManualVestingAccount): ManualVestingAccountProtoMsg;
};
