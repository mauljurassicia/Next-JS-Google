

import React, { Suspense } from "react";
import Loading from "./loading";

export default function Template({ children }) {
  return (
    <div className="check-function">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
