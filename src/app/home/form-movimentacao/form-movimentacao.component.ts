import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovimentacaoService } from 'src/app/service/movimentacao.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { ProdutoResponse } from 'src/app/model/response/produto.model.response';
import { ProdutoCosifResponse } from 'src/app/model/response/produtocosif.model.response';
import { MovimentacaoResponse } from 'src/app/model/response/movimentacao.model.response';

@Component({
  selector: 'app-form-movimentacao',
  templateUrl: './form-movimentacao.component.html',
  styleUrls: ['./form-movimentacao.component.css']
})
export class FormMovimentacaoComponent implements OnInit {

  public mvtForm!: FormGroup;
  produtos: ProdutoResponse[] | undefined;
  produtosCosif: ProdutoCosifResponse[] | undefined;
  mvtResponse: MovimentacaoResponse[] | undefined;

  constructor(
    private fb: FormBuilder,
    private restMvt: MovimentacaoService,
    private restPdt: ProdutoService,
    ){}

  ngOnInit(): void {
    this.mvtForm = this.fb.group({
      dtMes: [''],
      dtAno: [''],
      codProduto: [''],
      codCosif: [''],
      valor: [''],
      descricao: ['']
    });
    this.mvtForm.disable();
    this.getAllProdutos();
    this.carregarMovimentacoes();
  }

  incluir(){
    console.log(this.mvtForm.value);
    this.restMvt.createMovimentacao(this.mvtForm.value).subscribe(result => {});
    this.mvtForm.reset();
    window.location.reload();
  }

  limpar(){
    this.mvtForm.reset();
  }

  novo(){
    this.mvtForm.enable();
  }

  getAllProdutos(){
    this.restPdt.getAllProdutos().subscribe(data => {
      this.produtos = data;
    });
    console.log(this.produtos);
  }

  getProdutosCosif(){
    this.restPdt.getProdutosCosifPorCod('0001').subscribe(data => {
      this.produtosCosif = data;
    });
    console.log(this.produtos);
  }

  onChangeProduto(event: any) {

    var cod = {
      produto: event?.target.value
    }

    if (cod) {
      this.restPdt.getProdutosCosifPorCod(cod.produto).subscribe(data => {
        this.produtosCosif = data;
      });
    } else {
      this.produtosCosif = undefined;
    }
  }
  
  carregarMovimentacoes(){
    this.restMvt.getAllMovimentacao().subscribe(data => {
      this.mvtResponse = data
    });
    
  }

}
