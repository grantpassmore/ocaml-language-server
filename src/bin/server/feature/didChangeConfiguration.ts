import * as server from "vscode-languageserver";
import Session from "../session";

export default function(
  session: Session,
): server.NotificationHandler<server.DidChangeConfigurationParams> {
  return session.onDidChangeConfiguration.bind(session);
}
