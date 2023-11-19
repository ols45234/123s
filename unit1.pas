unit Unit1;

{$mode objfpc}{$H+}

interface

uses
  Classes, SysUtils, Forms, Controls, Graphics, Dialogs, StdCtrls;

type

  { TForm1 }

  TForm1 = class(TForm)
    Button1: TButton;
    Edit1: TEdit;
    Edit2: TEdit;
    Label1: TLabel;
    procedure Button1Click(Sender: TObject);
    function LevenshteinDistance(s, t: string): integer;
    function Min(a, b, c: Integer): Integer;
  private

  public

  end;

var
  Form1: TForm1;

implementation

{$R *.lfm}

{ TForm1 }

function TForm1.Min(a, b, c: Integer): Integer;
begin
  if a < b then
    if a < c then
      Min := a
    else
      Min := c
  else
    if b < c then
      Min := b
    else
      Min := c;
end;

function TForm1.LevenshteinDistance(s, t: String): Integer;
var
  m, n, i, j: Integer;
  d: array of array of Integer;
begin
  m := Length(s);
  n := Length(t);

  SetLength(d, m + 1, n + 1);

  for i := 0 to m do
    d[i, 0] := i;

  for j := 0 to n do
    d[0, j] := j;

  for j := 1 to n do
    for i := 1 to m do
    begin
      if LowerCase(s[i]) = LowerCase(t[j]) then
        d[i, j] := d[i-1, j-1]
      else
        d[i, j] := Min(d[i-1, j] + 1, d[i, j-1] + 1, d[i-1, j-1] + 1);
    end;

  LevenshteinDistance := d[m, n];
end;

procedure TForm1.Button1Click(Sender: TObject);
var
  i: integer;
  s: string;
begin
     i := LevenshteinDistance(edit1.Text, edit2.Text);
     str(i, s);
     label1.Caption := s;
end;

end.

