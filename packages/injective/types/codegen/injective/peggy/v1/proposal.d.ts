import * as _m0 from "protobufjs/minimal";
export interface BlacklistEthereumAddressesProposal {
    title: string;
    description: string;
    blacklistAddresses: string[];
}
export interface BlacklistEthereumAddressesProposalSDKType {
    title: string;
    description: string;
    blacklist_addresses: string[];
}
export interface RevokeEthereumBlacklistProposal {
    title: string;
    description: string;
    blacklistAddresses: string[];
}
export interface RevokeEthereumBlacklistProposalSDKType {
    title: string;
    description: string;
    blacklist_addresses: string[];
}
export declare const BlacklistEthereumAddressesProposal: {
    encode(message: BlacklistEthereumAddressesProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BlacklistEthereumAddressesProposal;
    fromPartial(object: Partial<BlacklistEthereumAddressesProposal>): BlacklistEthereumAddressesProposal;
};
export declare const RevokeEthereumBlacklistProposal: {
    encode(message: RevokeEthereumBlacklistProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RevokeEthereumBlacklistProposal;
    fromPartial(object: Partial<RevokeEthereumBlacklistProposal>): RevokeEthereumBlacklistProposal;
};
