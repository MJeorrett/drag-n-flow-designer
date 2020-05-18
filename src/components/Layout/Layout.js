import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';

import Tray from '../Tray';
import GraphEditor from '../GraphEditor';
import StepEditor from '../StepEditor';
import FieldEditor from '../FieldEditor';

const S = {
  Root: styled.div`
    background: #EEE;
    height: 100%;
  `,
  Content: styled.div`
    border-top: 1px solid darkgrey;
    display: flex;
    height: calc(100% - 72.8px);
    overflow: hidden;
  `,
  EditorContainer: styled.div`
    background: ${p => p.background};
    border-right: ${p => p.isOpen && !p.dropShadow ? '1px solid darkgrey' : 'none'};
    height: 100%;
    overflow: hidden;
    transition: all 500ms ease-in-out;
    width: ${p => (p.isOpen ? "400px" : "0")};
    box-shadow: ${p => p.dropShadow ? '5px 0px 5px 0px rgba(0,0,0,0.51)' : 'none'};
    z-index: ${p => p.zIndex ? p.zIndex : 0};
  `,
  EditorWrapper: styled.div`
    height: 100%;
    padding: 2rem;
    width: 400px;
  `,
  TrayWrapper: styled.div`
    border-right: 1px solid darkgrey;
    padding: 1rem;
    width: 100px;
  `,
};

const Layout = ({
  engine,
  stepIsOpen,
  fieldIsOpen
}) => {
  return (
    <S.Root>
      <Typography variant="h3" gutterBottom align="center">Siccar Storm</Typography>
      <S.Content>
        <S.EditorContainer
          isOpen={stepIsOpen}
          background="lightblue"
          zIndex={1}
          dropShadow={fieldIsOpen}
        >
          <S.EditorWrapper>
            <Typography variant="h3" gutterBottom color="primary">Edit Step</Typography>
            <StepEditor />
          </S.EditorWrapper>
        </S.EditorContainer>
        <S.EditorContainer
          isOpen={fieldIsOpen}
          background="lightblue"
        >
          <S.EditorWrapper>
            <Typography variant="h4" gutterBottom color="primary">Edit Field</Typography>
            <FieldEditor />
          </S.EditorWrapper>
        </S.EditorContainer>
        <S.TrayWrapper>
          <Tray />
        </S.TrayWrapper>
        <GraphEditor engine={engine} />
      </S.Content>
    </S.Root>
  );
};

export default Layout;
