import React, { useContext, useEffect } from "react";
import { TrackerContext } from "../context/reducers/TrackerContext";

const ResolveAuthScreen = () => {
  const { autoSignin } = useContext(TrackerContext);

  useEffect(() => {
    // Trigger autoSignin when the component mounts
    autoSignin();
  }, []);

  return null;
};

export default ResolveAuthScreen;
