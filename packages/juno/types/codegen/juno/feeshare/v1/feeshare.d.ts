import { BinaryWriter } from "../../../binary";
/**
 * FeeShare defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeeShare {
    /**
     * contract_address is the bech32 address of a registered contract in string
     * form
     */
    contractAddress: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the
     * same as the contracts admin address.
     */
    deployerAddress: string;
    /**
     * withdrawer_address is the bech32 address of account receiving the
     * transaction fees.
     */
    withdrawerAddress: string;
}
export interface FeeShareProtoMsg {
    typeUrl: "/juno.feeshare.v1.FeeShare";
    value: Uint8Array;
}
/**
 * FeeShare defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeeShareAmino {
    /**
     * contract_address is the bech32 address of a registered contract in string
     * form
     */
    contract_address?: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the
     * same as the contracts admin address.
     */
    deployer_address?: string;
    /**
     * withdrawer_address is the bech32 address of account receiving the
     * transaction fees.
     */
    withdrawer_address?: string;
}
export interface FeeShareAminoMsg {
    type: "/juno.feeshare.v1.FeeShare";
    value: FeeShareAmino;
}
/**
 * FeeShare defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeeShareSDKType {
    contract_address: string;
    deployer_address: string;
    withdrawer_address: string;
}
export declare const FeeShare: {
    typeUrl: string;
    encode(message: FeeShare, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeeShare;
    fromPartial(object: Partial<FeeShare>): FeeShare;
    fromAmino(object: FeeShareAmino): FeeShare;
    toAmino(message: FeeShare): FeeShareAmino;
    fromAminoMsg(object: FeeShareAminoMsg): FeeShare;
    fromProtoMsg(message: FeeShareProtoMsg): FeeShare;
    toProto(message: FeeShare): Uint8Array;
    toProtoMsg(message: FeeShare): FeeShareProtoMsg;
};
