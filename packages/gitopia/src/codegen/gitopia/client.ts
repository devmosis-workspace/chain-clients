import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as gitopiaTxRegistry from "./tx.registry";
import * as rewardsTxRegistry from "../rewards/tx.registry";
import * as gitopiaTxAmino from "./tx.amino";
import * as rewardsTxAmino from "../rewards/tx.amino";
export const gitopiaAminoConverters = {
  ...gitopiaTxAmino.AminoConverter,
  ...rewardsTxAmino.AminoConverter
};
export const gitopiaProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...gitopiaTxRegistry.registry, ...rewardsTxRegistry.registry];
export const getSigningGitopiaClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...gitopiaProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...gitopiaAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningGitopiaClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningGitopiaClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};