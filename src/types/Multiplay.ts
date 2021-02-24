import { Socket } from "socket.io";

export type MultiplayArea = "cloud" | "meadow" | "sea";

export type MultiplaySocket = Socket & {
  groupId?: string;
};

/* --- Join --- */

// Payload

export type MultiplayJoinPayload = {
  groupId?: string;
};

// Response

export type MultiplayJoinGroupResponse = string[];

export type MultiplayJoinResponse = MultiplayJoinGroupResponse;

/* --- Leave --- */

// Response

export type MultiplayLeaveGroupResponse = string[];

/* --- Update --- */

// Payload

export type MultiplayUpdatePayload = {
  position: {
    x: number;
    z: number;
  };
  rotation: {
    y: number;
  };
};

// Response

export type MultiplayUpdateResponse = {
  playerId: string;
  payload: MultiplayUpdatePayload;
};
