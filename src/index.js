/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { syntaxHighlighter } from "./syntax";
import React, { useEffect, useState } from "react";

export const JSONEditor = ({ value }) => {
  const [data, setData] = useState(value);
  const [content, setContent] = useState([]);

  useEffect(() => {
    try {
      let formattedString = data;

      if (typeof data === "object") {
        formattedString = JSON.stringify(data, null, 2);
      }

      const lines = formattedString.split(/\n/g).map(line => {
        return syntaxHighlighter(line);
      });

      setContent(lines);
    } catch (e) {
      console.log(e);
    }
  }, [data]);

  return (
    <div className={styles.jsonEditor}>
      {/* This is only temporary, we shouldn't even display this textarea */}
      <textarea
        style={{
          margin: "0 1em",
          width: "80%",
          height: 600
        }}
        value={data}
        onChange={event => {
          setData(event.target.value);
        }}
      />

      <div className={styles.editor}>
        {content.map((line, index) => {
          const lineCount = String(index + 1);

          return (
            <div key={index} className={styles.editorLine}>
              <div>{lineCount.padStart(2, "0")}</div>
              <pre dangerouslySetInnerHTML={{ __html: line }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

JSONEditor.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};
