var items = ['One', 'Two', 'Three', 'Four'];

var simpleRadioGroup = (
  <div>
    <h2>Numbers</h2>
    <RadioGroup name="number-simple" items={items} defaultValue="One" />
  </div>
);

var complexRadioGroup = (
  <div>
    <h2>Numbers</h2>
    <RadioGroup name="number-complex" defaultValue="3">
      <Gapped gap={40}>
        <Gapped vertical gap={10}>
          <b>Odd</b>
          <Radio value="1">One</Radio>
          <Radio value="3">Three</Radio>
          <Radio value="5" disabled>
            Five
          </Radio>
          <Radio value="7">Seven</Radio>
        </Gapped>
        <Gapped vertical gap={10}>
          <b>Even</b>
          <Radio value="2">Two</Radio>
          <Radio value="4">Four</Radio>
          <Radio value="6">Six</Radio>
          <Radio value="8">Eight</Radio>
        </Gapped>
      </Gapped>
    </RadioGroup>
  </div>
);

var snip = (
  <div>
    {simpleRadioGroup}
    {complexRadioGroup}
  </div>
);

ReactDOM.render(snip, mountNode);
